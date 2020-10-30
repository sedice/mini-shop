<template>
  <div>
    <van-form
      ref="loginForm"
      :validate-first="true"
      :show-error="false"
      :show-error-message="false"
      @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        label-width="60px"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        label-width="60px"
      />
      <div style="margin: 16px;">
        <van-button
          round
          block
          type="info"
          :disabled="buttonDisabled"
          :loading="buttonDisabled"
          native-type="submit">
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { createValidator } from '@/utils';
// import { login } from '@/api';

export default {
  data() {
    return {
      username: '',
      password: '',
      buttonDisabled: false,
    };
  },
  methods: {
    async onSubmit() {
      if (!this.validator()) {
        return;
      }
      console.log(this.username, this.password);
      const data = await this.$store.dispatch({
        type: 'login',
        payload: {
          username: this.username,
          password: this.password,
        },
      });
      console.log('===>', data);
    },
  },
  created() {
    const validateName = () => (this.username !== '' ? [true] : [false, '用户名不能为空']);
    const validatePassword = () => (/^[_a-zA-Z0-9]{6,8}$/.test(this.password)
      ? [true] : [false, '密码必须是6-8位字母数字下划线的组合']);
    this.validator = createValidator([
      validateName,
      validatePassword,
    ]);
  },
};
</script>

<style lang='less' scoped>

</style>
