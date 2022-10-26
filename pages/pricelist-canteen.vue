<template>
  <main class="site-main">
    <section class="blog-header flex flex-col h-center full-width">
      <img v-lazy-load src="/assets/img/AFK-34.jpg" class="full-width" alt="" />
      <div class="text flex flex-col container">
        <p class="h1">
          Canteen <br />
          UMN Pricelist
        </p>
        <p class="subtitle">
          Hemat waktu anda untuk tidak mengililingi kantin UMN satu putaran.
        </p>
      </div>
    </section>
    <section class="filter pt-20 pb-32 bg-light-grey">
      <div class="container">
        <div class="flex flex-col row-gap-8 full-width">
          <label for="price ">Jangkauan Harga:</label>
          <div class="flex flex-col md-flex-row col-gap-12">
            <input
              v-model="filter.minPrice"
              type="number"
              class="form-input"
              :class="{ 'form-input-error': errorMessage }"
              placeholder="Min. price"
            />
            <span>-</span>
            <input
              v-model="filter.maxPrice"
              type="number"
              class="form-input"
              :class="{ 'form-input-error': errorMessage }"
              placeholder="Max. price"
            />
          </div>
          <span class="text-small text-red">{{ errorMessage }}</span>
          <button
            :disabled="errorMessage ? true : false"
            class="btn-primary fit-content"
            @click="priceFilter"
          >
            Filter
          </button>
        </div>
      </div>
    </section>
    <section class="pricelist full-width">
      <div
        v-for="(data, key) of dataCanteenTemp"
        :key="key"
        class="full-width relative"
        style="border-top: 1px solid #151515"
      >
        <div class="content container grid">
          <div class="grid_column title" col="s12,m5">
            <h1 class="m-0">{{ data.name }}</h1>
          </div>
          <div class="grid_column grid" col="s12,m7">
            <div class="grid_column" col="s8">
              <span class="mb-12 f-bold">Menu:</span>
              <ul class="p-0">
                <li v-for="(menu, index) of data.menu" :key="index">
                  <span v-if="menu.price"
                    >Rp{{ $setCurrency(menu.price) }}</span
                  >
                  -
                  {{ menu.name }}
                </li>
              </ul>
              <span v-if="data.addOn" class="mb-12 f-bold">Add On:</span>
              <ul v-if="data.addOn" class="p-0">
                <li v-for="(addOn, i) of data.addOn" :key="i">
                  <span v-if="addOn.price"
                    >Rp{{ $setCurrency(addOn.price) }} -
                  </span>

                  {{ addOn.name }}
                </li>
              </ul>
            </div>
            <div class="grid_column image" col="s4">
              <img
                v-lazy-load
                :src="[data.image ? data.image : '/assets/img/icon-food.svg']"
                :class="{ 'default-image': !data.image }"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
export default {
  name: 'PricelistCanteen',
  layouts: 'DefaultLayout',
  data() {
    return {
      dataCanteenTemp: null,
      errorMessage: null,
      filter: {
        maxPrice: '',
        minPrice: ''
      },
      dataCanteen: [
      {
          name: 'Masakan Padang',
          menu: [
            {
              name: 'Paket Nasi Rendang',
              price: 25000
            },
            {
              name: 'Paket Nasi Ayam (Goreng / Gulai / Bakar)',
              price: 23000
            },
            {
              name: 'Paket Nasi Ikan (Goreng / Bakar)',
              price: 22000
            },
            {
              name: 'Paket Nasi Telur Dadar',
              price: 16000
            },
          ],
          addOn: [
            {
              name: 'Nasi Putih',
              price: 5000
            },
            {
              name: 'Rendang',
              price: 19000
            },
            {
              name: 'Ayam Goreng / Gulai',
              price: 17000
            },
            {
              name: 'Ikan Goreng / Gulai',
              price: 17000
            },
            {
              name: 'Telur Dadar',
              price: 10000
            },
            {
              name: 'Kerupuk Kulit',
              price: 8000
            }
          ]
        },
        {
          name: 'Mie Ayam',
          menu: [
            {
              name: 'Mie Ayam',
              price: 16000
            },
            {
              name: 'Mie Ayam Extra Ayam',
              price: 20000
            },
            {
              name: 'Mie Ayam Pangsit Rebus',
              price: 20000
            },
            {
              name: 'Mie Ayam Extra Ayam',
              price: 20000
            },
            {
              name: 'Mie Ayam Komplit',
              price: 22000
            },
            {
              name: 'Mie Ayam Double',
              price: 22000
            }

          ]
        },
        {
          name: 'Minahasa',
          menu: [
            {
              name: 'Paket Minahasa A (Nasi + Ikan / Ayam + Sayur + Bakwan Jagung)',
              price: 28000
            },
            {
              name: 'Paket Minahasa B (Nasi + Ikan / Ayam + Sayur)',
              price: 25000
            },
            {
              name: 'Paket Minahasa C (Nasi + Telur / Tempe + Sayur)',
              price: 15000
            }
          ],
          addOn: [
            {
              name: 'Nasi Putih',
              price: 5000
            },
            {
              name: 'Nasi Merah',
              price: 6000
            },
            {
              name: 'Ayam / Ikan',
              price: 15000
            },
            {
              name: 'Bakwan Jagung',
              price: 5000
            },
            {
              name: 'Telur',
              price: 5000
            },
            {
              name: 'Aneka Sayur',
              price: 5000
            }
          ]
        },
        {
          name: 'Selera Sigeulis',
          menu: [
            {
              name: 'Paket Nasi Ayam (Goreng / Sambal / Bakar)',
              price: 25000
            },
            {
              name: 'Nasi Telur + Tempe / Tahu (Semur / Sambal / Dadar)',
              price: 17000
            }
          ],
          addOn: [
            {
              name: 'Nasi Putih',
              price: 6000
            },
            {
              name: 'Ayam Goreng / Sambal',
              price: 19000
            },
            {
              name: 'Telur Semur / Sambal / Dadar / Ceplok',
              price: 8000
            },
            {
              name: 'Mie / Bihun Goreng',
              price: 12000
            },
            {
              name: 'Sayur Asem',
              price: 7000
            },
            {
              name: 'Tempe / Tahu',
              price: 3000
            },
            {
              name: 'Asinan Buah',
              price: 15000
            },
            {
              name: 'Rendang',
              price: 20000
            }
          ]
        },
        {
          name: 'Aneka Nasi & Bakmi Goreng',
          menu: [
            {
              name: 'Nasi / Mie / Bihun Goreng',
              price: 22000
            },
            {
              name: 'Nasi / Mie Goreng Isi (Ati Ampela / Bakso / Teri / Sosis / Tuna / Ayam )',
              price: 22000
            },
            {
              name: 'Nasi / Mie / Bihun Godog',
              price: 22000
            },
            {
              name: 'Nasi / Mie Goreng Seafood',
              price: 25000
            },
            {
              name: 'Bakmi Jawa Goreng / Nyemek / Godog',
              price: 22000
            },
            {
              name: 'Bakmi Goreng / Godog Seafood',
              price: 25000
            },
            {
              name: 'Magelangan / Mawut / Nasi Gila',
              price: 22000
            }
          ],
          addOn: [
            {
              name: 'Nasi Putih',
              price: 5000
            },
            {
              name: 'Telur Mata Sapi / Dadar',
              price: 5000
            },
            {
              name: 'Gorengan',
              price: 3000
            }
          ]
        },
        {
          name: 'Siomay & Batagor Kang Toha',
          menu: [
            {
              name: 'Isi 6',
              price: 15000
            },
            {
              name: 'Isi 8',
              price: 20000
            },
            {
              name: 'Batagor Kuah',
              price: 10000
            },
            {
              name: 'Cilok',
              price: 10000
            }
          ],
          addOn: [
            {
              name: 'Extra 1 Pcs',
              price: 3000
            },
            {
              name: 'Telur',
              price: 5000
            }
          ]
        },
        {
          name: 'Ketoprak & Gado-Gado',
          menu: [
            {
              name: 'Ketoprak',
              price: 14000
            },
            {
              name: 'Ketoprak + Telur Dadar / Ceplok',
              price: 19000
            },
            {
              name: 'Gado-Gado (Polos / Nasi / Lontong)',
              price: 14000
            },
            {
              name: 'Gado-Gado + Telur (Polos / Nasi / Lontong)',
              price: 19000
            }
          ],
          addOn: [
            {
              name: 'Nasi',
              price: 5000
            },
            {
              name: 'Lontong',
              price: 5000
            },
            {
              name: 'Telur',
              price: 5000
            }
          ]
        },
        {
          name: 'Hey Juice',
          menu: [
            {
              name: 'Jus Regular (Mangga, Jambu, Sirsak, Belimbing, Tomat, Nanas, Strawberry, Apel, Melon, Jeruk, Terong Belanda, Wortel)',
              price: 14000
            },
            {
              name: 'Jus Premium (Alpukat / Naga)',
              price: 16000
            },
            {
              name: 'Jus Mix 2 Buah',
              price: 16000
            },
            {
              name: 'Jus Mix 3 Buah',
              price: 18000
            },
            {
              name: 'Buah Potong',
              price: 15000
            }
          ]
        },
        {
          name: 'Hawker Bun',
          menu: [
            {
              name: 'Chicken Caesar Wrap',
              price: 25000
            },
            {
              name: 'Crispy Chicken Thousand Wrap',
              price: 25000
            },
            {
              name: 'Korean Crispy Chicken Wrap',
              price: 25000
            },
            {
              name: 'Gado-Gado Crispy Chicken Wrap',
              price: 25000
            },
            {
              name: 'Crispy Chicken Rempah Wrap',
              price: 25000
            },
            {
              name: 'Ayam Berempah Rice',
              price: 25000
            },
            {
              name: 'Korean Fried Chicken Rice',
              price: 25000
            },
            {
              name: 'Crispy Chicken Mayo Rice',
              price: 25000
            }
          ]
        },
        {
          name: 'Nasi Pecel Tulungagung',
          menu: [
            {
              name: 'Nasi Pecel Tulungagung (NPT)',
              price: 18000
            },
            {
              name: 'NPT + Telur Ceplok',
              price: 20000
            },
            {
              name: 'NPT + Telur Pindang',
              price: 24000
            },
            {
              name: 'Nasi Rawon',
              price: 23000
            },
            {
              name: 'Nasi Ayam Lengkuas',
              price: 20000
            },
            {
              name: 'Bakwan Pecel',
              price: 13000
            }
          ],
          addOn: [
            {
              name: 'Telur Asin'
            },
            {
              name: 'Sate Paru'
            },
            {
              name: 'Extra Peyek',
              price: 4000
            },
            {
              name: 'Tahu / Tempe Bacem',
              price: 4000
            },
            {
              name: 'Tempe Tepung Goreng',
              price: 4000
            }
          ]
        },
        {
          name: 'Bakso Qiqin',
          menu: [
            {
              name: 'Bakso Urat + 4 Bakso Kecil + Mie',
              price: 20000
            },
            {
              name: 'Bakso Selimut + 4 Bakso Kecil + Mie',
              price: 23000
            },
            {
              name: 'Bakso Beranak + 4 Bakso Kecil + Mie',
              price: 23000
            },
            {
              name: 'Bakso Iga + 4 Bakso Kecil + Mie',
              price: 23000
            },
            {
              name: 'Bakso Telur + 4 Bakso Kecil + Mie',
              price: 23000
            }
          ],
          addOn: [
            {
              name: 'Ekstra Nasi',
              price: 5000
            },
            {
              name: 'Ekstra Bakso Gede',
              price: 12000
            },
            {
              name: 'Extra Bakso Kecil',
              price: 2000
            }
          ]
        },
        {
          name: 'Aneka Soto',
          menu: [
            {
              name: 'Soto Betawi Daging',
              price: 25000
            },
            {
              name: 'Soto Daging Bening',
              price: 25000
            },
            {
              name: 'Soto Betawi Ayam',
              price: 20000
            },
            {
              name: 'Soto Oseng Ayam',
              price: 23000
            },
            {
              name: 'Soto Oseng Daging',
              price: 25000
            },
            {
              name: 'Sate Kuah',
              price: 25000
            },
            {
              name: 'Soto Banjar',
              price: 25000
            },
            {
              name: 'Soto Ayam Bening',
              price: 20000
            },
            {
              name: 'Soto Ayam',
              price: 20000
            },
            {
              name: 'Soto Ayam Nasi Campur',
              price: 17000
            },
            {
              name: 'Soto Daging Nasi Campur',
              price: 20000
            }
          ],
          addOn: [
            {
              name: 'Nasi Putih',
              price: 5000
            },
            {
              name: 'Perkedel, Aneka Sate, Usus Crispy',
              price: 5000
            },
            {
              name: 'Kerupuk',
              price: 2000
            },
            {
              name: 'Aneka Gorengan/Bacem',
              price: 3000
            }
          ]
        },
        {
          name: 'Marranu Catering',
          menu: [
            {
              name: 'Nasi + Sayur + Ayam / Ikan',
              price: 22000
            },
            {
              name: 'Nasi + Telur + Sayur',
              price: 17000
            },
            {
              name: 'Nasi + Fuyunghay',
              price: 15000
            }
          ],
          addOn: [
            {
              name: 'Nasi Putih',
              price: 5000
            },
            {
              name: 'Nasi Merah',
              price: 6000
            },
            {
              name: 'Telur',
              price: 7000
            },
            {
              name: 'Fuyunghay',
              price: 10000
            },
            {
              name: 'Ayam/Ikan',
              price: 12000
            },
            {
              name: 'Gorengan',
              price: 3000
            }
          ]
        },
        {
          name: 'Japanese Food',
          menu: [
            {
              name: 'Paket Chicken + Sayuran (Teriyaki / Yakiniku / Katsu / Katsu Kari / Egg Chicken Roll)',
              price: 22000
            },
            {
              name: 'Paket Fish + Sayuran (Fish Roll / Otak - Otak Asam Manis / Sapo Tahu Bakso Ikan)',
              price: 12000
            },
            {
              name: 'Paket Sosis Ayam Goreng',
              price: 22000
            },
            {
              name: 'Paket Ikan Balado',
              price: 20000
            },
            {
              name: 'Paket Ayam + Sayuran (Kornet Ayam / Ayam Kecap / Ayam Mentega / Telur Dadar Sosis)',
              price: 18000
            },
            {
              name: 'Fried Chicken + Nasi',
              price: 25000
            }
          ],
          addOn: [
            {
              name: 'Nasi Putih',
              price: 5000
            },
            {
              name: 'Nasi Merah',
              price: 6000
            },
            {
              name: 'Telur',
              price: 7000
            },
            {
              name: 'Fuyunghay',
              price: 10000
            },
            {
              name: 'Ayam/Ikan',
              price: 12000
            },
            {
              name: 'Gorengan',
              price: 3000
            }
          ]
        },
        {
          name: 'Lontong Sayur & Nasi Bakar Mami',
          menu: [
            {
              name: 'Lontong Sayur Biasa',
              price: 14000
            },
            {
              name: 'Lontong Sayur Telor',
              price: 17000
            },
            {
              name: 'Lontong Sayur Ayam',
              price: 20000
            },
            {
              name: 'Lontong Sayur Ayam Telor',
              price: 22000
            },
            {
              name: 'Nasi Bakar Ayam',
              price: 16000
            },
            {
              name: 'Nasi Bakar Cumi',
              price: 16000
            },
            {
              name: 'Nasi Bakar Tongkol',
              price: 16000
            }
          ],
          addOn: [
            {
              name: 'Telur Balado',
              price: 5000
            },
            {
              name: 'Opor Ayam',
              price: 10000
            },
            {
              name: 'Bakwan',
              price: 2000
            },
            {
              name: 'Tempe',
              price: 2000
            },
            {
              name: 'Tahu Isi',
              price: 2000
            },
            {
              name: 'Risol',
              price: 2000
            }
          ]
        },
        {
          name: 'Cebowl',
          menu: [
            {
              name: 'Sambal Matah Chicken Ricebowl',
              price: 25000
            },
            {
              name: 'Sambal Cabe Ijo Chicken Ricebowl',
              price: 25000
            },
            {
              name: 'Salted Egg Chicken Ricebowl',
              price: 27000
            },
            {
              name: 'Thai Sauce Chicken Ricebowl',
              price: 25000
            }
          ]
        },
        {
          name: 'Pempek & Tekwan Kusuko',
          menu: [
            {
              name: 'Pempek Kapal Selam',
              price: 22000
            },
            {
              name: 'Pempek Lenjer',
              price: 12000
            },
            {
              name: 'Tekwan 8 Pcs',
              price: 20000
            },
            {
              name: 'Pempek Kecil (Lenjer / Adaan / Kulit)',
              price: 7000
            },
            {
              name: 'Aneka Kerupuk',
              price: 10000
            }
          ]
        },
        {
          name: 'Katoshi',
          menu: [
            {
              name: 'Miso Ramen',
              price: 22000
            },
            {
              name: 'Dry Ramen',
              price: 22000
            },
            {
              name: 'Crispy Chicken XXL',
              price: 20000
            },
            {
              name: 'Chick Pop + Mie + Kentang',
              price: 22000
            },
            {
              name: 'Chick Pop + Nasi + Kentang',
              price: 22000
            }
          ]
        },
        {
          name: 'Mamipia Es Krim',
          menu: [
            {
              name: 'Es Krim Cone (Vanilla/Matcha/Charcoal/Seasonal)',
              price: 8000
            }
          ]
        },
        {
          name: 'Nomu Nomu 너무너무 Crepes and Cafe',
          menu: [
            {
              name: 'Chicken Favorite',
              price: 25000
            },
            {
              name: "Beef N' Cheese",
              price: 25000
            },
            {
              name: 'Burger Fiesta',
              price: 23000
            },
            {
              name: "Chicken N' Cheese",
              price: 23000
            },
            {
              name: 'Chicken Black Papper',
              price: 22000
            },            
            {
              name: 'Tuna Fries',
              price: 22000
            },
            {
              name: 'Double Chips',
              price: 18000
            },
            {
              name: "Cookies N' Cream",
              price: 21000
            },
            {
              name: 'Brownies',
              price: 21000
            },
            {
              name: 'Banana Slice',
              price: 20000
            },
            {
              name: 'Strawberry Dream',
              price: 20000
            },
            {
              name: 'Silverqueen Cheese',
              price: 27000
            },
            {
              name: 'Nutella Cheese',
              price: 33000
            },
            {
              name: 'Banana Choco Cheese',
              price: 22000
            },
            {
              name: 'Choco Nut Cheese',
              price: 20000
            },
            {
              name: 'Choco Nut',
              price: 18000
            },
            {
              name: 'Choco Cheese',
              price: 18000
            },
            {
              name: 'Blueberry Choco',
              price: 20000
            },
            {
              name: 'Blueberry Cheese',
              price: 20000
            },
            {
              name: 'Strawberry Choco',
              price: 19000
            },
            {
              name: 'Strawberry Cheese',
              price: 19000
            },
            {
              name: 'Milky Choco',
              price: 16000
            },
            {
              name: 'Milky Cheese',
              price: 16000
            },
            {
              name: 'Libro Guava'
            },
            {
              name: 'Nestle Milo'
            },
            {
              name: 'Nestle Milo Float',
              price: 25000
            },
            {
              name: 'Nestle Cappucino',
              price: 18000
            },
            {
              name: 'Nestle Cappucino Float',
              price: 26000
            },
            {
              name: 'Lemon Tea',
              price: 14000
            },
            {
              name: 'Nu Milk Tea',
              price: 10000
            },
            {
              name: 'Nu Green Tea',
              price: 9000
            },
            {
              name: 'Teh Botol Kotak',
              price: 5000
            },
            {
              name: 'Fruit Tea',
              price: 5000
            },
            {
              name: 'Mineral Water',
              price: 4000
            }
          ],
          addOn: [
            {
              name: 'Choco',
              price: 3000
            },
            {
              name: 'Cheese',
              price: 5000
            },
            {
              name: 'Peanut',
              price: 4000
            },
            {
              name: 'Milk',
              price: 3000
            },
            {
              name: 'Banana',
              price: 4000
            },
            {
              name: 'Oreo',
              price: 2000
            },
            {
              name: 'Ice Cream',
              price: 9000
            },
            {
              name: 'Cheese Slice',
              price: 4000
            },
            {
              name: 'Sausage',
              price: 6000
            },
            {
              name: 'Smoked Beef',
              price: 10000
            },
            {
              name: 'BBQ',
              price: 7000
            },
            {
              name: 'Tuna',
              price: 7000
            },
            {
              name: 'Silverqueen',
              price: 14000
            },
            {
              name: 'Nutella',
              price: 25000
            },
            {
              name: 'Beef Patties',
              price: 12000
            }
          ]
        }
      ],
      isLoading: true
    }
  },
  mounted() {
    this.dataCanteenTemp = this.dataCanteen
  },
  methods: {
    priceFilter() {
      if (this.filter.maxPrice === '' && this.filter.minPrice === '') {
        this.dataCanteenTemp = this.dataCanteen
        return
      }
      this.dataCanteenTemp = this.dataCanteen
      this.dataCanteenTemp = this.dataCanteenTemp
        .map(lapak => {
          let item
          if (
            this.filter.maxPrice === 0 ||
            this.filter.maxPrice === null ||
            this.filter.maxPrice === ''
          ) {
            item = lapak.menu.filter(item => {
              return item.price > this.filter.minPrice
            })
          } else {
            item = lapak.menu.filter(item => {
              return (
                item.price > this.filter.minPrice &&
                item.price < this.filter.maxPrice
              )
            })
          }

          return { name: lapak.name, menu: item, addOn: lapak.addOn }
        })
        .filter(data => {
          return data.menu.length !== 0
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.h1 {
  @media #{$large} {
    font-size: 3em;
  }
}
.blog {
  &-header {
    text-align: center;
    font-weight: 400;
    position: relative;
    margin: 0 0 0 0;
    min-height: 250px;

    color: #fff;

    @media #{$md} {
      min-height: 250px;
    }

    @media #{$large} {
      min-height: 400px;
      text-align: left;
      margin: 0 0 0 0;
    }

    img {
      position: absolute;
      z-index: 0;

      width: 100%;
      object-fit: cover;
      min-height: 100%;
      max-height: 250px;
      left: 0;

      filter: brightness(70%);

      @media #{$large} {
        max-height: 400px;
      }
    }

    .text {
      position: relative;
      z-index: 1;

      .h1 {
        font-family: Italiana, serif;
        margin: 0.5em 0 0 0;
      }

      p {
        margin: 0 0 2em 0;
      }
    }
  }
}

.pricelist {
  position: relative;

  .title {
    margin-bottom: 2em;
    @media #{$large} {
      padding-right: 78px;
    }
  }

  .content {
    padding: 3em 0;
  }

  .image {
    text-align: right;
    height: 100%;

    img {
      border-radius: 4px;
      width: 100%;
      max-width: 100px;
    }
  }
}

.filter {
  .container {
    div {
      @media #{$large} {
        width: fit-content;
      }
    }
  }
}

.site-main {
  font-family: Poppins-Light, sans-serif;
  display: flex;
  flex-direction: column;
}

.vh-40 {
  height: 40vh;
}
</style>
