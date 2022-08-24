<template>
  <div class="flex h-center mb-36 mt-24 col-gap-4">
    <div class="flex col-gap-4">
      <button
        class="btn-pagination cursor-pointer"
        :class="{ disabled: currentPage <= 1 }"
        @click="$emit('first-page')"
      >
        <i class="i-angle-double-left f-16"></i>
      </button>
      <button
        class="btn-pagination cursor-pointer"
        :class="{ disabled: currentPage <= 1 }"
        @click="$emit('prev-page')"
      >
        <i class="i-angle-left f-16"></i>
      </button>
    </div>
    <input
      id="page"
      :value="currentPage"
      class="page-input"
      type="number"
      name="page"
      min="1"
      :max="totalPages"
      @keyup.enter="
        $emit('input-page', baseLink + $event.target.value.toString())
      "
    />
    <span class="text-grey">/</span>
    <span class="text-grey">{{ totalPages }}</span>
    <div class="flex col-gap-4">
      <button
        class="btn-pagination cursor-pointer"
        :class="{ disabled: currentPage >= totalPages }"
        @click="$emit('next-page')"
      >
        <i class="i-angle-right f-16"></i>
      </button>
      <button
        class="btn-pagination cursor-pointer"
        :class="{ disabled: currentPage >= totalPages }"
        @click="$emit('last-page')"
      >
        <i class="i-angle-double-right f-16"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaginationComp',
  props: {
    currentPage: {
      type: Number,
      default: 1
    },
    totalPages: {
      type: Number,
      default: 1
    },
    baseLink: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.btn-pagination {
  padding: 6px 8px;
  background: #3d3d3d;
  color: #fff;
  border: none;
  border-radius: 3px;
}

.page-input {
  display: flex;
  text-align: center;
  width: fit-content;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  margin: 0;
  -webkit-appearance: none;
}

input[type='number'] {
  -moz-appearance: textfield;
}

.disabled {
  background-color: #b6b6b6;
  border: none;
}
</style>
