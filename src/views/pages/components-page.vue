<template>
  <div class="components-table">
    <div class="form-box">
      <ui-datepicker
        :date="date"
        :label="'Дата'"
        :minDate="
          new Date(
            dateNow.getFullYear() - 60,
            dateNow.getMonth(),
            dateNow.getDate()
          )
        "
        :maxDate="
          new Date(
            dateNow.getFullYear() - 18,
            dateNow.getMonth(),
            dateNow.getDate()
          )
        "
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-property-decorator";
import UiDatepicker from "@/components/ui/ui-datepicker/ui-datepicker.vue";

@Options({
  name: "components-page",
  components: {
    UiDatepicker,
  },
})
export default class ComponentsPage extends Vue {
  dateNow: Date = new Date();
  date: Date = new Date(
    this.dateNow.getFullYear() - 18,
    this.dateNow.getMonth(),
    this.dateNow.getDate()
  );
}
</script>

<style lang="less">
.components-table {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

  .form-box {
    max-width: 300px;
    width: 100%;
  }
}
</style>