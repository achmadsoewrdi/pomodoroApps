<script setup>
import { ref, onMounted, watch } from 'vue';

// props
const props = defineProps({
  duration: {
    type: Number,
    default: 1500,
  }
})

const timeLeft = ref(0);
const isRunning = ref(false);
let timeInterval = null;

const resetTimer = () => {
  clearInterval(timeInterval);
  timeLeft.value = props.duration;
  isRunning.value = false;
}

const toggleTimer = () => {
  if (isRunning.value) {
    clearInterval(timeInterval);
    isRunning.value = false;
  } else {
    isRunning.value = true;
    timeInterval = setInterval(() => {
      if (timeLeft.value > 0) {
        timeLeft.value--;
      } else {
        clearInterval(timeInterval);
        isRunning.value = false;
      }
    }, 1000);
  }
}

const formatTime = (seconds) => {
  const min = String(Math.floor(seconds / 60)).padStart(2, '0');
  const sec = String(seconds % 60).padStart(2, '0');
  return `${min}:${sec}`;
}


watch(() => props.duration, resetTimer, { immediate: true });

onMounted(() => {
  clearInterval(timeInterval);
});
</script>
<template>
  <div
    class="bg-indigo-100 p-20 rounded-3xl flex flex-col items-center gap-4 w-96 shadow-inner ring-4 ring-indigo-300 font-mono">
    <h2 class="text-xl font-semibold text-indigo-700">Pomodoro Timer</h2>

    <div class="text-5xl font-mono text-indigo-800">{{ formatTime(timeLeft) }}</div>

    <div class="flex gap-2 mt-4">
      <button @click="toggleTimer" class="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">
        {{ isRunning ? 'Pause' : 'Start' }}
      </button>
      <button @click="resetTimer" class="px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-600 transition">
        Reset
      </button>
    </div>
  </div>


</template>
