const nodemailer = require('nodemailer')

module.exports = function sendMail(toMail,header,content){
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        // host: "smtp.ethereal.email",
        // port: 465,
        // secure: true, // true for 465, false for other ports
        auth: {
            user: 'babyking1st14@gmail.com', // generated ethereal user
            pass: 'dangngocquang', // generated ethereal password
        },
        // tls:{
        //     rejectUnauthorized:false
        // },
        // connectionTimeout: 5 * 60 * 1000, // 5 min
    })

    const mailOptions = {
        from:'babyking1st14@gmail.com',
        to:toMail,
        subject:header,
        html:content
    }
    transporter.sendMail(mailOptions,function(err,info){
        if(err){
            console.log(err)
        }else{
            console.log('Email sent:' + info.response);
        }
    })
}
