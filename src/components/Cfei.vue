<script lang="ts" setup>
</script>

<template>
  <div>
    <fieldset>
      <legend>
        Credit For Existing Insurance
      </legend>

      <div class="cfei-input-container">
        <div class="cfei-input-row">
          <div>
            <label class="cfei-label">
              Credit For Existing Insurance
              <input type="checkbox" />
            </label>

            <span class="nvu-question-tooltip" title="Allows you to write a Package policy with different effective dates for the Property &amp; Auto segments."></span>
          </div>
          <div>
            <p>other thing</p>
          </div>
        </div>
      </div>

    </fieldset>
  </div>
</template>

<style scoped>
.cfei-input-container {
}

.cfei-input-row {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.cfei-label {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
</style>
