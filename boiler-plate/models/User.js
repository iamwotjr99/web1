const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //빈칸을 없애준다
        unique: 1 // 하나만 유일
    },
    password: {
        type: String,
        minlength: 5
    },
    firstname: {
        type: String,
        maxlength: 50
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number // 토큰 유효기간
    }
})

userSchema.pre('save', function(next) {
    let user = this;

    if(user.isModified('password')) {
        // 비밀번호를 암호화 시킨다.
        bcrypt.genSalt(saltRounds, function(err, salt){
            if(err) {
                return next(err);
            }

            bcrypt.hash(user.password, salt, function(err, hash){
                if(err) {
                    return next(err);
                }
                user.password = hash;
                next();
            })
        })
    } else {
        next();
    }
})

userSchema.methods.comparePassword = function(plainPassword, callback) {

    //plainPassword와 암호화된 비밀번호가 같은지 체크
    bcrypt.compare(plainPassword, this.password, function(err, isMatch) {
        if(err) {
            return callback(err);
        }
        callback(null, isMatch);
    })
}

userSchema.methods.generateToken = function(callback) {

    let user = this;
    // jsonwebtoken을 이용해서 token을 생성하기

    let token = jwt.sign(user._id.toHexString(), 'secretToken');

    user.token = token;
    user.save(function(err, user) {
        if(err) {
            return callback(err);
        }
        callback(null, user);
    })

}

userSchema.statics.findByToken = function(token, callback) {
    let user = this;

    // 토큰을 decode 한다.
    jwt.verify(token, 'secretToken', function(err, decoded) {
        // 유저 아이디를 이용해서 유저를 찾은 다음에
        // 클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인

        user.findOne({ "_id": decoded, "token": token }, function(err, user) {
            if(err) {
                return callback(err);
            }
            callback(null, user);
        })
    })
}

const User = mongoose.model('User', userSchema);
module.exports = {User};