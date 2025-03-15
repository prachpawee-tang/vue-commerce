<script setup>
import SectionHeader from '@/components/SectionHeader.vue'
</script>

<template>
  <!-- today flash sale section  -->
  <SectionHeader
    smallText="Limited Time Offer"
    smallTextColor="red"
    bigText="Special Deals"
    :showViewAll="false"
    :showCarouselControls="true"
    @view-all="handleViewAll"
    @prev="handleCarouselPrev"
    @next="handleCarouselNext"
  />
  <!-- product category section -->
</template>
