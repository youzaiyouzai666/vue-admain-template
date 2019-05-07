<template>
  <div class="login-container">
    <div class="container">
      <div class='head'>
        <div class='logo fl'></div>
      </div>
      <div class='title fl'>
        <div>合同文件一站式管理平台</div>
        <p>合同起草、审批、签署、执行、统计、归档  全生命周期管理</p>
      </div>
      <!-- <el-form :model="ruleForm" status-icon rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="name">
           <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="checkPass">
            <el-input type="password" v-model="AA" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
          </el-form-item>
        </el-form> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    // const validateUsername = (rule, value, callback) => {
    //   if (!validUsername(value)) {
    //     callback(new Error('Please enter the correct user name'))
    //   } else {
    //     callback()
    //   }
    // }
    // const validatePassword = (rule, value, callback) => {
    //   if (value.length < 6) {
    //     callback(new Error('The password can not be less than 6 digits'))
    //   } else {
    //     callback()
    //   }
    // }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      // loginRules: {
      //   username: [
      //     { required: true, trigger: 'blur', validator: validateUsername }
      //   ],
      //   password: [
      //     { required: true, trigger: 'blur', validator: validatePassword }
      //   ]
      // },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  created() {
    // window.addEventListener('storage', this.afterQRScan)
  },
  mounted() {
    // if (this.loginForm.username === '') {
    //   this.$refs.username.focus()
    // } else if (this.loginForm.password === '') {
    //   this.$refs.password.focus()
    // }
  },
  destroyed() {
    
  },
  methods: {
    checkCapslock({ shiftKey, key } = {}) {
      if (key && key.length === 1) {
        if (
          (shiftKey && (key >= 'a' && key <= 'z')) ||
          (!shiftKey && (key >= 'A' && key <= 'Z'))
        ) {
          this.capsTooltip = true
        } else {
          this.capsTooltip = false
        }
      }
      if (key === 'CapsLock' && this.capsTooltip === true) {
        this.capsTooltip = false
      }
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store
            .dispatch('user/login', this.loginForm)
            .then(() => {
              this.$router.push({ path: this.redirect || '/' })
              this.loading = false
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/css/variable.scss';
.fl{float:left}
.login-container{width:100%;height:1000px;background-color:#262932;background: url('../../assets/image/bg.jpg');
   .container{width:1180px;margin:0 auto;
    .head{height: 75px;
      .logo{height:40px;width: 245px;background: url('../../assets/image/logo.png') no-repeat;margin-top:25px}
    }
   }
}
.title{color:$font-cw;margin-top:50px;text-align:left;font-family:$font-family;
  div{font-size:32px;line-height: 40px;}
  p{font-size:16px;margin-top:20px}
}

</style>
