import jwt from 'jsonwebtoken';

const generateToken = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
        expiresIn: '10d'
    });
    res.cookie('jwt_token', token, {
        httpOnly: true,
        secure: false,
        sameSite: 'strict',
    });
};

export default generateToken;