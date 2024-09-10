<template>
  <div class="main">

    <!-- Sign up form -->
    <section class="signup">
      <div class="container">
        <div class="signup-content">
          <div class="signup-form">
            <h2 class="form-title">ĐĂNG KÝ</h2>
            <form method="POST" class="register-form" id="register-form">
              <div class="form-group">
                <label for="name"><i class="zmdi zmdi-account material-icons-name"></i></label>
                <input type="text" name="name" id="name" placeholder="Họ và tên" />
              </div>
              <div class="form-group">
                <label for="email"><i class="zmdi zmdi-email"></i></label>
                <input type="email" name="email" id="email" placeholder="Email" />
              </div>
              <div class="form-group">
                <label for="pass"><i class="zmdi zmdi-lock"></i></label>
                <input type="password" name="pass" id="pass" placeholder="Mật khẩu" />
              </div>
              <div class="form-group">
                <label for="re-pass"><i class="zmdi zmdi-lock-outline"></i></label>
                <input type="password" name="re_pass" id="re_pass" placeholder="Nhập lại mật khẩu" />
              </div>
              <div class="form-group">
                <input type="checkbox" name="agree-term" id="agree-term" class="agree-term" />
                <label for="agree-term" class="label-agree-term"><span><span></span></span>Tôi đồng ý với các điều khoản<a href="#" class="term-service"> của công ty</a></label>
              </div>
              <div class="form-group form-button">
                <input type="submit" name="register" id="register" class="form-submit" value="Đăng ký" />
                <router-link :to="{name: 'login'}" class="btn-login-return">Đăng nhập</router-link>
              </div>
            </form>
          </div>
          <div class="signup-image">
            <figure><img src="../../public/images/signup-image.jpg" alt="sing up image"></figure>
            <!-- <a href="#" class="signup-image-link">I am already member</a> -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>

</script>