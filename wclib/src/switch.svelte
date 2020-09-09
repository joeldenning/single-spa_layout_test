<script>
  import { custom_event, onMount } from "svelte/internal";

  export let checked = false;
  export let label = "Change Me!";
  export let customIndicator = null;
  export let checkboxEl;

  function onChange() {
    checked = checkboxEl.checked;

    const checkEvent = new CustomEvent("sv-check", {
      bubbles: true,
      cancelable: true,
      composed: true,
      detail: { isChecked: checked },
    });

    const cancelled = checkboxEl.dispatchEvent(checkEvent);
  }

  onMount(() => {
    checked = checkboxEl.checked;
  });
</script>

<style>
  .label {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    color: #394a56;
  }

  .label-text {
    margin-left: 16px;
  }

  .toggle {
    isolation: isolate;
    position: relative;
    height: 30px;
    width: 60px;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6,
      4px 4px 4px 0px #d1d9e6 inset, -4px -4px 4px 0px #ffffff inset;
  }

  .toggle-state {
    display: none;
  }

  .indicator {
    height: 100%;
    width: 200%;
    background: #ecf0f3;
    border-radius: 15px;
    transform: translate3d(-75%, 0, 0);
    transition: transform 0.4s cubic-bezier(0.85, 0.05, 0.18, 1.35);
    box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6;
  }

  .toggle-state:checked ~ .indicator {
    transform: translate3d(25%, 0, 0);
  }
</style>

<svelte:options tag="svelte-switch" immutable={true} />

<!-- svelte-ignore a11y-label-has-associated-control -->
<label class="label">
  <div class="toggle">
    <input
      class="toggle-state"
      type="checkbox"
      name="check"
      bind:checked
      bind:this={checkboxEl}
      on:change={onChange} />
    <div class="indicator" style={customIndicator} />
  </div>
  <div class="label-text">{label}</div>
</label>
