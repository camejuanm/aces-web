<template>
  <div class="flex h-center mb-36 mt-24 col-gap-4">
    <div class="flex col-gap-4">
      <button
        class="btn-pagination cursor-pointer"
        @click="$emit('first-page')"
      >
        >>
      </button>
      <button class="btn-pagination cursor-pointer" @click="$emit('prev-page')">
        >
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
      <button class="btn-pagination cursor-pointer" @click="$emit('next-page')">
        >
      </button>
      <button class="btn-pagination cursor-pointer" @click="$emit('last-page')">
        >>
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
  background: #fff;

  border: 1px solid rgba($color: #000000, $alpha: 0.3);
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
</style>
