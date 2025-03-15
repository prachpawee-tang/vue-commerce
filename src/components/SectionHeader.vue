<template>
  <div class="section-header">
    <!-- Left Side -->
    <div class="left-content">
      <div class="small-text" :style="{ color: smallTextColor }">{{ smallText }}</div>
      <div class="big-text">
        {{ bigText }}
        <span v-if="timer" class="timer">{{ formattedTime }}</span>
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

      return `${days}d ${hours}h ${minutes}m ${seconds}s`
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
  padding: 1rem;
}

.left-content .small-text {
  font-size: 0.8rem;
  font-weight: bold;
}

.left-content .big-text {
  font-size: 1.5rem;
  font-weight: bold;
}

.timer {
  margin-left: 0.5rem;
  font-size: 1rem;
  color: #666;
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
