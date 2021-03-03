import Vue from 'vue';

<div id="counter">
  Counter: {{ counter }}
</div>

const Counter = {
  data() {
    return {
      counter: 0
    }
  }
}

Vue.createApp(Counter).mount('#root');
