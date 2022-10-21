<template>
  <div class="dropdown">
    <button class="form-input flex" @click="show" @focusout="isShow = false">
      <span
        class="placeholder"
        :class="active === '' || active === null ? 'text-black' : ''"
        >{{ active === '' || active === null ? placeholder : active }}</span
      >

      <i
        v-if="active === '' || active === null || !deleteBtn"
        class="i-angle-right"
      ></i>
      <i v-else class="i-close cursor-pointer" @click="reset"></i>
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
  name: 'DropdownLabss',
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

  .placeholder {
    margin-right: 6px;
  }

  span {
    min-width: 100px;
  }

  button {
    border-radius: 0;
    display: flex;
    align-items: center;
    background: transparent;
    border: 0;
    margin: 0;
    padding: 0;
    font-size: 12px;

    @media #{$large} {
      min-width: 150px;
    }
  }

  &-list {
    position: absolute;
    bottom: 38px;
    min-width: 100%;
    z-index: 10;
    background: transparent;
    left: 0;
    top: 20px;

    ul {
      border-radius: 4px;
      list-style: none;
      padding-left: 0;
      background: white;
      box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.08);
      max-height: 160px;
      overflow-y: auto;

      li {
        padding: 12px 12px;
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
