<template>
  <div class="login_container">
    <div class="login_box">
      <div class="avater_box">
        <img src="../assets/logo.png" alt="头像">
      </div>

      <el-form ref="LoginFormRef" :model="form" :rules="LoginFormRules" class="login_form" label-width="auto">
        <!-- username -->
        <el-form-item prop="username">
          <el-input v-model="form.username" prefix-icon="iconfont icon-user"/>
        </el-form-item>
        <!-- password -->
        <el-form-item prop="password">
          <el-input v-model="form.password" prefix-icon="iconfont icon-password"
                    type="password"/>
        </el-form-item>
        <!-- button -->
        <el-form-item class="buttons">
          <el-button type="primary" @click="loginValidate">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {
        form: {
          username: '',
          password: ''
        },
        LoginFormRules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 5, max: 10, message: '长度在 5 到 10 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      // 表单重置
      resetLoginForm () {
        this.$refs.LoginFormRef.resetFields()
      },
      loginValidate () {
        this.$refs.LoginFormRef.validate(async status => {
          if (!status) return this.$message.error('登录失败！')
          // const {data: res} = await this.$http.post('login', this.$refs.LoginFormRef.form)
          // TODO 1.对数据进行验证  2.保存登录信息 sessionStorage/localStorage
          window.sessionStorage.setItem('token', 'fhsdhfshfiudhfuishfuisdhfui')
          this.$message.success('登录成功！')
          await this.$router.push('/home')
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .login_container {
    background-color: #2b4b6b;
    height: 100%;
  }

  .login_box {
    height: 300px;
    width: 450px;
    background-color: #fff;
    border-radius: 7px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .avater_box {
      height: 130px;
      width: 130px;
      border: 1px solid #eee;
      border-radius: 50%;
      padding: 10px;
      box-shadow: 0 0 10px #ddd;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;

      img {
        height: 100%;
        width: 100%;
        border-radius: 50%;
        background-color: #eee;
      }
    }

    .login_form {
      position: absolute;
      bottom: 0;
      width: 100%;
      padding: 0 30px;
      box-sizing: border-box;
    }

    .buttons {
      display: flex;
      justify-content: flex-end;
    }
  }
</style>
