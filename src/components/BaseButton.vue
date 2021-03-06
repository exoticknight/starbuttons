<template>
  <div
    @click="play"
    ref="self"
    :class="{
      playingBtn: playLayer > 0,
      testHoverWidth,
      pending: pendingNetwork
    }"
    :style="{
      minWidth
    }"
    tabindex="0"
  >
    {{ localizedName }}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Sound } from "../types";

@Component
export default class BaseButton extends Vue {
  @Prop() private item!: Sound;
  @Prop() private noclickplay!: boolean;
  private playLayer = 0;
  private pendingNetwork = false;
  private testHoverWidth = false;
  private minWidth = "0px";
  private mounted() {
    this.testHoverWidth = true;
    this.$nextTick(() => {
      const width = (this.$refs.self as HTMLElement).offsetWidth;
      this.minWidth = String(width - 16 + "px");
      this.testHoverWidth = false;
    });
  }
  get localizedName() {
    return (
      (this?.item.name_l10n || {})[this.$i18n.locale] || this?.item.name || ""
    );
  }

  public play() {
    try {
      this.playHandler()
    } catch (e) {
      this.$emit(
        "error",
        this.$t("Error in sound playing:").toString() +
        e.toString() +
        "\n" +
        this.$t(
          "We've known about it and will work on it soon."
        ).toString()
      );
      throw e;
    }
  }

  private playHandler() {
    if (this.noclickplay) return;
    if (!this.item) {
      return;
    }
    let audioFilename;
    if (typeof this.item.file === "string") {
      audioFilename = this.item.file;
    } else {
      audioFilename = this.item.file[
        Math.floor(Math.random() * this.item.file.length)
      ];
    }
    this.pendingNetwork = true;
    let audio;
    try {
      audio = this.$status.player.addAudio(`assets/${audioFilename}`);
    } catch (_) {
      this.$status.player.stopAllWhenNonMultiPlay();
      (audio as HTMLAudioElement).play();
    }

    (audio as HTMLAudioElement).addEventListener("play", () => {
      this.pendingNetwork = false;
      this.playLayer += 1;
      if (this.playLayer === 1) {
        this.$emit("started");
      }
    });
    (audio as HTMLAudioElement).addEventListener("pause", () => {
      this.playLayer -= 1;
      if (this.playLayer === 0) {
        this.$emit("stopped");
      }
    });
  }
}
</script>

<style lang="scss" scoped>
.pending {
  opacity: 0.8;
}
</style>
