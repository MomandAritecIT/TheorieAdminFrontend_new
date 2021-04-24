<template>
  <section class="app">
    <div class="container">
      <h1>Codes</h1>
      <v-data-table
        dense
        :headers="headers"
        :items="allCodes"
        :footer-props="{
          'items-per-page-options': [25, 50, 100],
          'items-per-page-text': 'Codes per pagina',
        }"
        item-key="name"
        class="elevation-1"
        :loading="isLoading"
        loading-text="Eén ogenblik geduld alstublieft"
      >
        <template v-slot:[`item.is_active`]="{ item }">
          <v-avatar :color="item.is_active ? 'green' : 'red'" size="25">
            <span class="white--text">{{ item.is_active }}</span>
          </v-avatar>
        </template>
        <template v-slot:[`item.is_blocked`]="{ item }">
          <v-avatar :color="item.is_blocked ? 'green' : 'red'" size="25">
            <span class="white--text">{{ item.is_blocked }}</span>
          </v-avatar>
        </template>
        <template v-slot:[`item.last_login`]="{ item }">
          <span v-if="item.last_login">{{ item.last_login }}</span>
          <span v-else>n.v.t</span>
        </template>
        <template v-slot:[`item.is_online`]="{ item }">
          <v-avatar :color="item.is_online ? 'green' : 'red'" size="25">
            <span class="white--text">{{ item.is_online }}</span>
          </v-avatar>
        </template>
        <template v-slot:[`item.options`]="{ item }">
          <v-icon @click="(modalVisibility = true), (aboutToUpdate = item.id)">mdi-pencil</v-icon>
          <v-icon @click="(confirmDialogVisibility = true), (aboutToDelete = item.id)">mdi-delete</v-icon>
        </template></v-data-table>
      <DialogConfirm :visibility="confirmDialogVisibility" @confirmAccept="deleteCode" @closeDialog="closeDialog">
        <template slot="title">Weet u zeker dat u code {{ aboutToDelete }} wilt verwijderen?</template>
        <template slot="text">Wanneer u code {{ aboutToDelete }} verwijderd, dan kunt u het niet meer terug halen.</template>
        <template slot="confirmButton">Jazeker</template>
      </DialogConfirm>
      <EditModal :visibility="modalVisibility" :formInputs="formInputs" @saveModal="updateCode" @cancelModal="closeModal">
        <template slot="title">Update code</template>
      </EditModal>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
import DialogConfirm from "@/components/dialogConfirm";
import EditModal from '@/components/editModal';
export default {
  components: { DialogConfirm, EditModal },
  data() {
    return {
      headers: [
        { text: "Index", value: "id" },
        { text: "Code", value: "code" },
        { text: "Geactiveerd", value: "is_active" },
        { text: "geblokkeerd", value: "is_blocked" },
        { text: "Laatst ingelogd", value: "last_login" },
        { text: "Online", value: "is_online" },
        { text: "Verloopt op", value: "expires_on" },
        { text: "Opties", value: "options" },
      ],
      formInputs: {
        boolean: '0',
        date: '2020-04-23'
      },
      allCodes: [],
      isLoading: true,
      confirmDialogVisibility: false,
      modalVisibility: false,
      aboutToDelete: null,
      aboutToUpdate: null
    };
  },
  methods: {
    ...mapActions({
      SET_SUCCESS: "Notification/SET_SUCCESS",
      SET_ERROR: "Notification/SET_ERROR",
    }),
    fetchCodes() {
      axios.get("/api/code/list").then((response) => {
        this.allCodes = response.data;
        this.isLoading = false;
      });
    },
    updateCode() {
      console.log('updated');
      this.closeModal(); 
    },
    deleteCode() {
      axios.delete(`/api/code/${this.aboutToDelete}/destroy`).then((response) => {
        this.SET_SUCCESS(response.data.success);
        this.allCodes = this.allCodes.filter((code) => code.id !== this.aboutToDelete);
        this.closeDialog();
      });
    },
    closeDialog() {
      this.confirmDialogVisibility = false;
      this.aboutToDelete = null;
    },
    closeModal() {
      this.modalVisibility = false;
      this.aboutToUpdate = null;
    }
  },
  computed: mapGetters({ authenticated: "Auth/authenticated" }),
  created() {
    this.fetchCodes();
  },
};
</script>
