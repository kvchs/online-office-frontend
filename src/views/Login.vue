<template>
    <div>
        <el-form ref="form" :model="loginForm" class="loginContainer" >
            <h3 class="loginTitle">登录系统</h3>
            <el-form-item >
                <el-input type="text" v-model="loginForm.username" placeholder="请输入用户名" auto-complete="false"></el-input>
            </el-form-item>
            <el-form-item >
                <el-input v-model="loginForm.passwork" placeholder="请输入密码" type="password" auto-complete="false"></el-input>
            </el-form-item>
            <el-form-item >
                <el-input v-model="loginForm.code" placeholder="点击图片更换验证码" type="text" auto-complete="false" style="width:200px; margin-right:5px"></el-input>
                <img :src="captchaUrl">
               
            </el-form-item>
            <el-checkbox label="" v-model="checked" class="remember">记住密码</el-checkbox>
            <el-button type="primary" style="width:100%">登录</el-button>
            
        </el-form>
    </div>
</template>

<script>
export default {
    name: "Login",
    data(){
        return {
            captchaUrl: '',
            loginForm:{
                username: 'admin',
                password: 'admin',
                code: ''

            },
            checked:true
        }
    }
}
</script>
<style>
    .loginContainer{
        border-radius: 15px;
        background-clip: padding-box;
        margin: 180px auto;
        width: 350px;
        padding: 15px 35px 15px 35px;
        background: #fff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;

    }
    .loginTitle{
        margin: 0px auto 40px auto;
        text-align: center;
        color: royalblue;
    }
    .remember{
        text-align: left;
        margin: 0px 0px 15px 0px;
    }

</style>