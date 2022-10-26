<template>
  <div class="dropdown">
    <button
      class="form-input flex full-width pl-12 pr-12"
      @click="show"
      @focusout="isShow = false"
    >
      <span :class="active === '' || active === null ? 'text-grey' : ''">{{
        active === '' || active === null ? placeholder : active
      }}</span>

      <i
        v-if="active === '' || active === null || !deleteBtn"
        class="i-angle-right ml-auto"
      ></i>
      <i v-else class="i-close ml-auto cursor-pointer" @click="reset"></i>
      <div class="dropdown-list" :class="isShow ? '' : 'hidden'">
        <ul>
          <li
            v-for="(item, index) in list"
            :key="index"
            @click="changeFunc(item)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: 'DropdownComponent',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    active: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default: () => []
    },
    deleteBtn: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    show() {
      this.isShow = !this.isShow
    },
    changeFunc(item) {
      this.$emit('clicked', item.slug)
      this.isShow = false
      this.show()
    },
    reset() {
      this.changeFunc('')
      this.show()
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown {
  position: relative;
  &-list {
    position: absolute;
    bottom: 38px;
    width: 100%;
    z-index: 10;
    background: transparent;
    left: 0;
    top: 30px;

    ul {
      border-radius: 4px;
      list-style: none;
      padding-left: 0;
      background: white;
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
      max-height: 160px;
      overflow-y: auto;
      li {
        border-radius: 4px;
        padding: 12px 24px;
        background: white;
        &:hover {
          background: #ffece7;
          cursor: pointer;
        }
      }
    }
  }
}

.hidden {
  display: none !important;
}
</style>
