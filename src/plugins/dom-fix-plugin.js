let localVue;

function preventMove() {
  // 阻止左右翻页
  let xStart; let xEnd; let yStart; let
    yEnd;

  document.addEventListener('touchstart', (evt) => {
    xStart = evt.touches[0].pageX;
    yStart = evt.touches[0].pageY;
  }, false);

  document.addEventListener('touchmove', (evt) => {
    xEnd = evt.touches[0].pageX;
    yEnd = evt.touches[0].pageY;
    // 左右滑动
    if (Math.abs(xStart - xEnd) > Math.abs(yStart - yEnd)) {
      evt.preventDefault();
    }
  }, false);
}
export default {
  install(Vue) {
    if (localVue === Vue) {
      return;
    }
    localVue = Vue;
    preventMove();
  },
};
