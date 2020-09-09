<template>
  <div class="client-list">
    <table class="clients-table">
      <thead>
        <th>Name</th>
        <th>Position</th>
        <th>Height</th>
        <th>Weight</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="client in clients" v-bind:key="client.id">
          <td>{{ client.first_name }} {{ client.last_name }}</td>
          <td>
            {{ client.position }}
          </td>
          <td>
            <span v-if="client.height_feet"
              >{{ client.height_feet }} ft {{ client.height_inches }} in</span
            >
            <span v-else>&mdash;</span>
          </td>
          <td>
            <span v-if="client.weight_pounds"
              >{{ client.weight_pounds }} lbs</span
            >
            <span v-else>&mdash;</span>
          </td>
          <td>
            <button class="v-buy-button" v-on:click="buy(client)">Buy</button>
            <button class="v-dispatch-button" v-on:click="dispatch(client)">
              Dispatch
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { pubsub } from "pubsub";
export default {
  data() {
    return {
      clients: []
    };
  },
  created() {
    this.fetchClients(this.$route.params.clientId);
  },
  methods: {
    fetchClients(id) {
      fetch(`https://www.balldontlie.io/api/v1/players`)
        .then(res => res.json())
        .then(json => {
          this.clients = json.data.filter(d => d.id === Number.parseInt(id));
        });
    },
    buy(client) {
      window.dispatchEvent(
        new CustomEvent("buy", { bubbles: true, detail: { client } })
      );
    },
    dispatch(client) {
      pubsub.dispatch("test", { client });
      this.$router.push("/app1/profile");
    }
  }
};
</script>
<style scoped>
.client-list {
  margin-top: var(--navbar-height);
}

.table-container {
  position: relative;
}

table.clients-table {
  width: 100%;
  height: 100%;
  border-spacing: 0;
}

.clients-table th {
  position: sticky;
  top: 6rem;
  background-color: #efefef;
  box-shadow: 0 0.2rem 0.2rem #dfdfdf;
  height: 4rem;
}

.clients-table th:hover {
  background-color: #dfdfdf;
}

.clients-table thead {
  z-index: 100;
}

.clients-table thead tr {
  height: 6rem;
}

.clients-table tbody tr:hover td {
  background-color: #efefef;
}

.clients-table tbody {
  background-color: white;
}

.clients-table td {
  text-align: center;
  height: 4rem;
  border-bottom: 0.1rem solid #efefef;
}

.clients-table td a {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
}
</style>
