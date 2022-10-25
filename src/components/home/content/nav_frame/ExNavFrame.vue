<template>
  <div>
    <div>
      <div class="ex-sidebar-block">
        <ul>
          <li
              class="ex-main-menu-item"
              :class="{
							active:
								currentActiveCodeMainMenu ===
								product_menu_block.main_menu.active_code,
						}"
          >
            {{ product_menu_block.main_menu.label }}
            <span>
							<font-awesome-icon
                  class="ex-sub-menu-toggle-icon"
                  @click="
									product_menu_block.main_menu.show_sub_menu =
										!product_menu_block.main_menu
											.show_sub_menu
								"
                  :icon="
									product_menu_block.main_menu.show_sub_menu
										? 'fa-solid fa-angle-up'
										: 'fa-solid fa-angle-down'
								"
              />
						</span>
          </li>
          <div
              class="ex-sub-menu-block"
              :class="{
							show: product_menu_block.main_menu.show_sub_menu,
						}"
          >
            <ul>
              <li
                  class="ex-sub-menu-item"
                  :class="{
									active:
										currentActiveCodeSubMenu ===
										product_menu_block.sub_menu.list_product
											.active_code,
								}"
                  @click="
									selectMenuItem(
										product_menu_block.main_menu
											.active_code,
										product_menu_block.sub_menu.list_product
											.active_code
									)
								"
              >
                {{
                  product_menu_block.sub_menu.list_product
                      .label
                }}
              </li>

              <li
                  class="ex-sub-menu-item"
                  :class="{
									active:
										currentActiveCodeSubMenu ===
										product_menu_block.sub_menu.add_product
											.active_code,
								}"
                  @click="
									selectMenuItem(
										product_menu_block.main_menu
											.active_code,
										product_menu_block.sub_menu.add_product
											.active_code
									)
								"
              >
                {{
                  product_menu_block.sub_menu.add_product
                      .label
                }}
              </li>

              <li
                  class="ex-sub-menu-item"
                  :class="{
									active:
										currentActiveCodeSubMenu ===
										product_menu_block.sub_menu
											.statistical_product.active_code,
								}"
                  @click="
									selectMenuItem(
										product_menu_block.main_menu
											.active_code,
										product_menu_block.sub_menu
											.statistical_product.active_code
									)
								"
              >
                {{
                  product_menu_block.sub_menu
                      .statistical_product.label
                }}
              </li>
            </ul>
          </div>

          <!-- order -->
          <li
              class="ex-main-menu-item"
              :class="{
							active:
								currentActiveCodeMainMenu ===
								order_menu_block.main_menu.active_code,
						}"
          >
            {{ order_menu_block.main_menu.label }}
            <span>
							<font-awesome-icon
                  class="ex-sub-menu-toggle-icon"
                  @click="
									order_menu_block.main_menu.show_sub_menu =
										!order_menu_block.main_menu
											.show_sub_menu
								"
                  :icon="
									order_menu_block.main_menu.show_sub_menu
										? 'fa-solid fa-angle-up'
										: 'fa-solid fa-angle-down'
								"
              />
						</span>
          </li>
          <div
              class="ex-sub-menu-block"
              :class="{
							show: order_menu_block.main_menu.show_sub_menu,
						}"
          >
            <ul>
              <li
                  class="ex-sub-menu-item"
                  :class="{
									active:
										currentActiveCodeSubMenu ===
										order_menu_block.sub_menu.list_order
											.active_code,
								}"
                  @click="
									selectMenuItem(
										order_menu_block.main_menu.active_code,
										order_menu_block.sub_menu.list_order
											.active_code
									)
								"
              >
                {{ order_menu_block.sub_menu.list_order.label }}
              </li>

              <li
                  class="ex-sub-menu-item"
                  :class="{
									active:
										currentActiveCodeSubMenu ===
										order_menu_block.sub_menu
											.statistical_order.active_code,
								}"
                  @click="
									selectMenuItem(
										order_menu_block.main_menu.active_code,
										order_menu_block.sub_menu
											.statistical_order.active_code
									)
								"
              >
                {{
                  order_menu_block.sub_menu.statistical_order
                      .label
                }}
              </li>
            </ul>
          </div>

          <!-- blog -->
          <li
              class="ex-main-menu-item"
              :class="{
							active:
								currentActiveCodeMainMenu ===
								blog_menu_block.main_menu.active_code,
						}"
          >
            {{ blog_menu_block.main_menu.label }}
            <span>
							<font-awesome-icon
                  class="ex-sub-menu-toggle-icon"
                  @click="
									blog_menu_block.main_menu.show_sub_menu =
										!blog_menu_block.main_menu.show_sub_menu
								"
                  :icon="
									blog_menu_block.main_menu.show_sub_menu
										? 'fa-solid fa-angle-up'
										: 'fa-solid fa-angle-down'
								"
              />
						</span>
          </li>
          <div
              class="ex-sub-menu-block"
              :class="{
							show: blog_menu_block.main_menu.show_sub_menu,
						}"
          >
            <ul>
              <li
                  class="ex-sub-menu-item"
                  :class="{
									active:
										currentActiveCodeSubMenu ===
										blog_menu_block.sub_menu.list_blog
											.active_code,
								}"
                  @click="
									selectMenuItem(
										blog_menu_block.main_menu.active_code,
										blog_menu_block.sub_menu.list_blog
											.active_code
									)
								"
              >
                {{ blog_menu_block.sub_menu.list_blog.label }}
              </li>

              <li
                  class="ex-sub-menu-item"
                  :class="{
									active:
										currentActiveCodeSubMenu ===
										blog_menu_block.sub_menu.add_blog
											.active_code,
								}"
                  @click="
									selectMenuItem(
										blog_menu_block.main_menu.active_code,
										blog_menu_block.sub_menu.add_blog
											.active_code
									)
								"
              >
                {{ blog_menu_block.sub_menu.add_blog.label }}
              </li>
            </ul>
          </div>
          <!-- end blog-->
          <!-- word -->
          <li
              class="ex-main-menu-item"
              :class="{
							active:
								currentActiveCodeMainMenu ===
								word_menu_block.main_menu.active_code,
						}"
          >
            {{ word_menu_block.main_menu.label }}
            <span>
							<font-awesome-icon
                  class="ex-sub-menu-toggle-icon"
                  @click="
									word_menu_block.main_menu.show_sub_menu =
										!word_menu_block.main_menu.show_sub_menu
								"
                  :icon="
									word_menu_block.main_menu.show_sub_menu
										? 'fa-solid fa-angle-up'
										: 'fa-solid fa-angle-down'
								"
              />
						</span>
          </li>
          <div
              class="ex-sub-menu-block"
              :class="{
							show: word_menu_block.main_menu.show_sub_menu,
						}"
          >
            <ul>
              <li
                  class="ex-sub-menu-item"
                  :class="{
									active:
										currentActiveCodeSubMenu ===
										word_menu_block.sub_menu.list_word
											.active_code,
								}"
                  @click="
									selectMenuItem(
										word_menu_block.main_menu.active_code,
										word_menu_block.sub_menu.list_word
											.active_code
									)
								"
              >
                {{ word_menu_block.sub_menu.list_word.label }}
              </li>

              <li
                  class="ex-sub-menu-item"
                  :class="{
									active:
										currentActiveCodeSubMenu ===
										word_menu_block.sub_menu.add_word
											.active_code,
								}"
                  @click="
									selectMenuItem(
										word_menu_block.main_menu.active_code,
										word_menu_block.sub_menu.add_word
											.active_code
									)
								"
              >
                {{ word_menu_block.sub_menu.add_word.label }}
              </li>
            </ul>
          </div>
          <!-- end word-->
          <!-- core -->
          <li
              class="ex-main-menu-item"
              :class="{
							active:
								currentActiveCodeMainMenu ===
								core_menu_block.main_menu.active_code,
						}"
          >
            {{ core_menu_block.main_menu.label }}
            <span>
							<font-awesome-icon
                  class="ex-sub-menu-toggle-icon"
                  @click="
									core_menu_block.main_menu.show_sub_menu =
										!core_menu_block.main_menu.show_sub_menu
								"
                  :icon="
									core_menu_block.main_menu.show_sub_menu
										? 'fa-solid fa-angle-up'
										: 'fa-solid fa-angle-down'
								"
              />
						</span>
          </li>
          <div
              class="ex-sub-menu-block"
              :class="{
							show: core_menu_block.main_menu.show_sub_menu,
						}"
          >
            <ul>
              <li
                  class="ex-sub-menu-item"
                  :class="{
									active:
										currentActiveCodeSubMenu ===
										core_menu_block.sub_menu.list_component
											.active_code,
								}"
                  @click="
									selectMenuItem(
										core_menu_block.main_menu.active_code,
										core_menu_block.sub_menu.list_component
											.active_code
									)
								"
              >
                {{ core_menu_block.sub_menu.list_component.label }}
              </li>
            </ul>
          </div>
          <!-- end core-->
        </ul>
      </div>
      <div class="ex-top-menu-block">
        <ExNotification></ExNotification>
        <div class="ex-navbar-block">
          <div class="ex-user-block">User name</div>
          <div
              class="ex-navbar-item"
              :class="{ active: indexTopMenuItemActive === 1 }"
              @click="selectTopMenuItem(1)"
          >
            Menu 1
            <div class="ex-under-line"></div>
          </div>
          <div
              class="ex-navbar-item"
              :class="{ active: indexTopMenuItemActive === 2 }"
              @click="selectTopMenuItem(2)"
          >
            Menu 2
            <div class="ex-under-line"></div>
          </div>
          <div
              class="ex-navbar-item"
              :class="{ active: indexTopMenuItemActive === 3 }"
              @click="selectTopMenuItem(3)"
          >
            Menu 3
            <div class="ex-under-line"></div>
          </div>
          <div
              class="ex-navbar-item"
              :class="{ active: indexTopMenuItemActive === 4 }"
              @click="selectTopMenuItem(4)"
          >
            Menu 4
            <div class="ex-under-line"></div>
          </div>
          <div
              class="ex-navbar-item"
              :class="{ active: indexTopMenuItemActive === 5 }"
              @click="selectTopMenuItem(5)"
          >
            Menu 5
            <div class="ex-under-line"></div>
          </div>
          <div class="ex-search-item">Thanh Search</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ExNotification from "../../../partials/notifications/ExNotification.vue";

export default {
  name: "ExNavFrame",
  components: {
    ExNotification,
  },
  data() {
    return {
      indexTopMenuItemActive: 1,

      currentActiveCodeMainMenu: "",
      currentActiveCodeSubMenu: "",

      product_menu_block: {
        main_menu: {
          label: "Quản lý Sản phẩm",
          name: "product-management",
          active_code: "product-management",
          show_sub_menu: false,
        },
        sub_menu: {
          list_product: {
            label: "Danh sách Sản phẩm",
            name: "list-product",
            active_code: "product-management/list-product",
          },
          add_product: {
            label: "Thêm Sản phẩm",
            name: "add-product",
            active_code: "product-management/add-product",
          },
          statistical_product: {
            label: "Thống kê Sản phẩm",
            name: "statistical-product",
            active_code:
                "product-management/statistical-product",
          },
        },
      },

      order_menu_block: {
        main_menu: {
          label: "Quản lý Hóa đơn",
          name: "order-management",
          active_code: "order-management",
          show_sub_menu: false,
        },
        sub_menu: {
          list_order: {
            label: "Danh sách Hóa đơn",
            name: "list-order",
            active_code: "order-management/list-order",
          },
          statistical_order: {
            label: "Thống kê Hóa đơn",
            name: "statistical-order",
            active_code: "order-management/statistical-order",
          },
        },
      },

      blog_menu_block: {
        main_menu: {
          label: "Quản lý Bài viết",
          name: "blog-management",
          active_code: "blog-management",
          show_sub_menu: false,
        },
        sub_menu: {
          list_blog: {
            label: "Danh sách Bài viết",
            name: "list-blog",
            active_code: "blog-management/list-blog",
          },
          add_blog: {
            label: "Thêm Bài viết",
            name: "add-blog",
            active_code: "blog-management/add-blog",
          },
        },
      },

      word_menu_block: {
        main_menu: {
          label: "Quản lý Từ Vựng",
          name: "word-management",
          active_code: "word-management",
          show_sub_menu: false,
        },
        sub_menu: {
          list_word: {
            label: "Danh sách Từ vựng",
            name: "list-word",
            active_code: "word-management/list-word",
          },
          add_word: {
            label: "Thêm Từ vựng",
            name: "add-word",
            active_code: "word-management/add-word",
          },
        },
      },
      core_menu_block: {
        main_menu: {
          label: "Quản lý Core",
          name: "core-management",
          active_code: "core-management",
          show_sub_menu: false,
        },
        sub_menu: {
          list_component: {
            label: "Danh sách Component",
            name: "list-component",
            active_code: "core-management/list-component",
          },
        },
      },
    };
  },

  created() {
    console.log("Tạo Nav");
  },

  methods: {
    selectMenuItem(
        currentActiveCodeMainMenu,
        currentActiveCodeSubMenu
    ) {
      this.currentActiveCodeMainMenu = currentActiveCodeMainMenu;
      this.currentActiveCodeSubMenu = currentActiveCodeSubMenu;

      this.$router.push({
        name: currentActiveCodeSubMenu,
      });
    },

    selectTopMenuItem(index) {
      this.indexTopMenuItemActive = index;
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/css/colors.scss";

.ex-sidebar-block {
  position: absolute;
  top: 55px;
  left: 0;
  height: calc(100% - 55px);
  width: 240px;
  border-right: 1px solid rgba(84, 84, 84, 48);

  background-color: $dark;
  overflow-y: scroll;

  .ex-sub-menu-toggle-icon {
    &:hover {
      color: #ffcb6b;
    }
  }
}

ul {
  list-style: none;
  margin-block-start: 0 !important;
  margin-block-end: 0 !important;
  padding-inline-start: 0 !important;
}

.ex-sidebar-block ul li {
  padding: 10px 5px 10px 5px;
  background-color: $menu-item-dark;
  margin-bottom: 1px;

  span {
    float: right;
    margin: 0px 10px 0px 10px;
    cursor: pointer;
    user-select: none;
  }
}

.ex-top-menu-block {
  position: absolute;
  top: 0px;
  left: 0px;
  height: 55px;
  width: calc(100%);
  padding-right: 10px;
  border-bottom: 1px solid rgba(84, 84, 84, 48);

  background-color: $dark;
}

.ex-main-menu-item {
  color: rgba(255, 255, 255, 87);
}

.ex-main-menu-item.active {
  border-left: 4px solid #ffcb6b;
}

.ex-sub-menu-block {
  position: relative;
  display: none;
  width: calc(100% - 20px);
  height: auto;
  margin: 0px 0px 0px 20px;
}

.ex-sub-menu-block.show {
  display: block;
  animation: fade_in_show 0.5s;
}

.ex-sub-menu-item {
  cursor: pointer;
  color: #42b883;
}

.ex-sub-menu-item.active {
  border-left: 4px solid #ffcb6b;
}

.ex-navbar-block {
  width: fit-content;
  height: 100%;
  float: right;
  z-index: 10;
}

.ex-search-item,
.ex-navbar-item,
.ex-user-block {
  width: fit-content;
  height: 100%;
  float: right;
  text-align: center;
  padding: 0px 10px 0px 10px;
  line-height: calc(55px - 1px);
  /* Đặt line-height đúng bằng height của phần tử cha thì phần tử text sẽ được canh giữa theo chiều dọc */
  font-size: 15px;
  font-weight: 400;
  color: rgba(255, 255, 255, 87);
  cursor: pointer;
}

.ex-navbar-item {
  &:hover {
    color: #ffcb6b;
  }
}

.ex-navbar-item.active {
  .ex-under-line {
    height: 1px;
    width: 100%;
    background-color: #42b883;
  }
}

@keyframes fade_in_show {
  0% {
    opacity: 0;
    transform: translateX(-10px);
  }

  100% {
    opacity: 1;
    transform: translateX(0px);
  }
}
</style>
