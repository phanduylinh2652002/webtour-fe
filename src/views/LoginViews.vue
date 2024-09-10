<template>
  <div class="main">
    <!-- Sing in  Form -->
    <section class="sign-in">
      <div class="container">
        <div class="signin-content">
          <div class="signin-image">
            <figure><img src="../../public/images/signin-image.jpg" alt="sing up image"></figure>
            <router-link :to="{name: 'register'}" class="signup-image-link btn-login-return" >Tạo tài khoản</router-link>
          </div>

          <div class="signin-form">
            <h2 class="form-title">ĐĂNG NHẬP</h2>
            <form method="POST" class="register-form" id="login-form">
              <div class="form-group">
                <label for="your_name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                <input type="text" name="your_name" id="your_name" placeholder="Tài khoản" />
              </div>
              <div class="form-group">
                <label for="your_pass"><i class="zmdi zmdi-lock"></i></label>
                <input type="password" name="your_pass" id="your_pass" placeholder="Mật khẩu" />
              </div>
              <div class="form-group">
                <input type="checkbox" name="remember-me" id="remember-me" class="agree-term" />
                <label for="remember-me" class="label-agree-term"><span><span></span></span>Nhớ mật khẩu</label>
              </div>
              <div class="form-group form-button">
                <input type="submit" name="signin" id="signin" class="form-submit" value="Đăng nhập" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>

</script>