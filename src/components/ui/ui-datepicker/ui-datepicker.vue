<template>
  <div class="ui-datepicker">
    <label class="label"> {{ label }} </label>
    <input
      type="text"
      class="input"
      readonly
      :value="Datepicker.DateFormating(Datepicker.Date)"
      @click="Datepicker.SetDropdownVisible"
    />

    <div class="dropdown" v-if="Datepicker.DropdownVisible">
      <div class="navigation">
        <div
          class="arrow left"
          @click="Datepicker.Back()"
          :class="{ 'no-active': Datepicker.GetBackNoActive }"
        ></div>
        <div class="date-interval">
          {{ Datepicker.DateFormating(Datepicker.NavDates.From) }}
          <span> - </span>
          {{ Datepicker.DateFormating(Datepicker.NavDates.To) }}
        </div>
        <div
          class="arrow right"
          @click="Datepicker.Next()"
          :class="{ 'no-active': Datepicker.GetNextNoActive }"
        ></div>
      </div>

      <div class="years">
        <div
          class="year"
          v-for="year in Datepicker.GetVisibleYears"
          :key="year"
        >
          <div :class="Datepicker.GetNoActiveYear(year)">{{ year }}</div>
        </div>
      </div>

      <div class="mounth"></div>

      <div class="day"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from "vue-property-decorator";
import DatepickerModel from "@/components/ui/ui-datepicker/models/datepicker-model";

@Options({
  name: "ui-datepicker",
  components: {
    UiDatepicker,
  },
})
export default class UiDatepicker extends Vue {
  @Prop() label: string;
  @Prop() date: Date;
  @Prop() minDate: Date;
  @Prop() maxDate: Date;

  Datepicker = new DatepickerModel();

  created() {
    this.Datepicker.Date = this.date;

    this.Datepicker.NavDates = {
      From: new Date(
        this.date.getFullYear() - (this.date.getFullYear() % 10) - 1,
        this.date.getMonth(),
        this.date.getDate()
      ),
      To: new Date(
        this.date.getFullYear() - (this.date.getFullYear() % 10) + 10,
        this.date.getMonth(),
        this.date.getDate()
      ),
    };
    this.Datepicker.MinDate = this.minDate;
    this.Datepicker.MaxDate = this.maxDate;
  }
}
</script>

<style lang="less">
@fs: 14px;
@lh: 17px;

@label-mb: 5px;

@active-color: #252525;
@active-color-hover: #ffffff;
@active-color-bg-hover: #252525;

@no-active-color: #555555;

@current-color: #ffffff;
@current-bg-color: #ff4800;

@border-color: #151515;
@border-radius: 4px;

@ico-url: "@/assets/ico/ui/calendar.png";
@ico-size: 17px;
@ico-margin-right: 10px;

@input-padding: 5px (@ico-margin-right + @ico-size + 5px) 5px 10px;
@char-width: 8px;

@arrow-ico-url: "@/assets/ico/ui/calendar.png";

@navigation-mb: 10px;

@dropdown-mt: 5px;
@dropdown-padding: 10px 5px;

@year-padding: 5px 7px;
@year-border-radius: 25px;

.ui-datepicker {
  max-width: 100%;
  display: flex;
  flex-flow: wrap;
  .label {
    font-size: @fs;
    line-height: @lh;
    color: @no-active-color;
    margin-bottom: @label-mb;
  }
  .input {
    display: flex;
    max-width: 100%;
    width: 100%;
    font-size: @fs;
    line-height: @lh;
    border: 1px solid @border-color;
    border-radius: @border-radius;
    padding: @input-padding;
    background: url(@ico-url) no-repeat center;
    background-size: @ico-size @ico-size;
    background-position-x: calc(100% - 10px);
    cursor: pointer;
  }
  .dropdown {
    width: 100%;
    border: 1px solid @border-color;
    border-radius: @border-radius;
    margin-top: @dropdown-mt;
    padding: @dropdown-padding;
    font-size: @fs;
    line-height: @lh;
    .navigation {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: @active-color;
      margin-bottom: @navigation-mb;
      font-weight: 600;
      .arrow {
        background: url(@arrow-ico-url) no-repeat center;
        width: 10px;
        height: 10px;
        cursor: pointer;
        &.no-active {
          cursor: not-allowed;
          opacity: 0.5;
        }
      }
      .date-interval {
        margin: 0 10px;
      }
    }
    .years {
      display: flex;
      flex-flow: wrap;
      & > .year {
        display: flex;
        justify-content: center;
        width: 25%;
        cursor: pointer;
        padding: @year-padding;
        & > div:not(.no-active) {
          color: @active-color;
          padding: @year-padding;
          border-radius: @year-border-radius;
          &:hover {
            color: @active-color-hover;
            background: @active-color-bg-hover;
          }
        }
        & > div.no-active {
          color: @no-active-color;
          padding: @year-padding;
          cursor: not-allowed;
        }
      }
    }
  }
}
</style>