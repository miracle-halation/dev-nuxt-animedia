<template>
  <v-container
    class="fill-height"
    fluid
    style="min-height: 434px"
  >
    <v-row>
      <v-col md="12">
        <v-form>
          <v-container>
            <v-text-field v-model="search">
              <template v-slot:label>
                  ルームを検索する<v-icon style="vertical-align: middle">
                  mdi-file-find
                </v-icon>
              </template>
            </v-text-field>
            <v-btn @click="reSearchRooms">
              検索
            </v-btn>
          </v-container>
        </v-form>
      </v-col>
    </v-row>
      <v-row>
        <v-col
          v-for="room in this.rooms"
          :key="room.id"
          class="d-flex child-flex"
          cols="4"
        >
          <nuxt-link :to="`/rooms/${room.id}`">
            <v-card>
              <v-img
                :src="`${room.image_path}`"
                max-height="125"
                class="grey darken-4"
              ></v-img>
              <v-card-title class="text-h6">
                {{room.name}}
              </v-card-title>
              <v-card-text>
                {{room.description}}
              </v-card-text>
            </v-card>
          </nuxt-link>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
	asyncData(){
		return{
			rooms: null,
      search: null
		}
	},
	mounted(){
		this.searchRooms()
	},
	methods:{
		searchRooms(){
      const formData = new FormData()
      formData.append('data', this.$route.query.query)
			this.$axios.post(`/v1/rooms/search`, formData)
			.then((response) => {
				this.rooms = response.data.data
			})
			.catch((error) => {
				console.log(error)
			})
		},
    reSearchRooms(){
      const formData = new FormData()
      formData.append('data', this.search)
			this.$axios.post(`/v1/rooms/search`, formData)
			.then((response) => {
        this.rooms = null
				this.rooms = response.data.data
			})
			.catch((error) => {
				console.log(error)
			})
		}
	}
}
</script>

<style scoped>
  .search_result{
    display: flex;
    justify-content: space-around;
  }
</style>