<template>
  <div class="section-header">
    <!-- Left Side -->
    <div class="left-content">
      <div class="small-text-container" style="display: flex">
        <div class="rectangle"></div>
        <div class="small-text">{{ smallText }}</div>
      </div>
      <div class="big-text" :style="{ marginTop: timer ? '0' : '1rem' }">
        {{ bigText }}
        <div v-if="timer" class="timer">
          <div v-for="(time, name, index) in formattedTime" :key="time" class="time-container">
            <div>
              <p class="time-label">{{ name.charAt(0).toUpperCase() + name.slice(1) }}</p>
              <h2 class="time-value">{{ time.toString().padStart(2, '0') }}</h2>
            </div>
            <span v-if="index !== Object.keys(formattedTime).length - 1" class="time-separator"
              >:</span
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Right Side -->
    <div class="right-content">
      <button v-if="showViewAll" class="view-all" @click="handleViewAll">View All</button>
      <div v-if="showCarouselControls" class="carousel-controls">
        <button class="control-btn" @click="handlePrev">‹</button>
        <button class="control-btn" @click="handleNext">›</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    smallText: {
      type: String,
      default: '',
    },
    smallTextColor: {
      type: String,
      default: 'red',
    },
    bigText: {
      type: String,
      default: '',
    },
    timer: {
      type: Number, // in seconds
      default: null,
    },
    showViewAll: {
      type: Boolean,
      default: false,
    },
    showCarouselControls: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      timeRemaining: this.timer,
    }
  },
  computed: {
    formattedTime() {
      if (!this.timeRemaining) return ''

      const days = Math.floor(this.timeRemaining / (3600 * 24))
      const hours = Math.floor((this.timeRemaining % (3600 * 24)) / 3600)
      const minutes = Math.floor((this.timeRemaining % 3600) / 60)
      const seconds = this.timeRemaining % 60

      return { days, hours, minutes, seconds }
    },
  },
  methods: {
    handleViewAll() {
      this.$emit('view-all')
    },
    handlePrev() {
      this.$emit('prev')
    },
    handleNext() {
      this.$emit('next')
    },
    updateTimer() {
      if (this.timeRemaining > 0) {
        this.timeRemaining--
      }
    },
  },
  mounted() {
    if (this.timer) {
      setInterval(this.updateTimer, 1000)
    }
  },
}
</script>

<style scoped>
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 1rem;
}

.left-content .small-text {
  font-size: 0.8rem;
  font-weight: bold;
}

.left-content .big-text {
  font-size: 1.5rem;
  font-weight: bold;
}

.big-text {
  display: flex;
  align-items: flex-end;
  gap: 2em;

  line-height: 1;
}

.small-text-container {
  display: flex;
  align-items: center;
  color: #db4444;
  gap: 1em;
}
.rectangle {
  width: 15px;
  height: 25px;
  flex: none;
  order: 0;
  flex-grow: 0;
  background: #db4444;
  border-radius: 4px;
}

.timer {
  margin-left: 0.5rem;
  font-size: 1rem;
  color: #666;

  display: flex;
}
.time-container {
  display: flex;
  align-items: flex-end;
}
.time-label {
  font-size: 0.6em;
}
.time-value {
  line-height: 1;
  font-weight: bold;
}
.time-separator {
  margin: 0.2em 0.2em;
}

.right-content {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.view-all {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
}

.carousel-controls {
  display: flex;
  gap: 0.5rem;
}

.control-btn {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid #ccc;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.control-btn:hover {
  background: #f0f0f0;
}
</style>
