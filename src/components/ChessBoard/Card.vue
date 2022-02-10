<template>
  <div class="container" @click="doFlip">
    <div class="card" :class="{ flipped: card.flipped }">
      <img v-if="card.name === 'brami'" class="front" src="../../assets/brami.jpg" />
      <img v-if="card.name === 'winnerkid'" class="front" src="../../assets/winnerkid.jpg" />
      <img v-if="card.name === 'tuxedopooh'" class="front" src="../../assets/tuxedopooh.jpg" />
      <img v-if="card.name === 'gigachad'" class="front" src="../../assets/gigachad.jpg" />
      <img v-if="card.name === 'madara'" class="front" src="../../assets/madara.jpg" />
      <img v-if="card.name === 'eren'" class="front" src="../../assets/eren.jpg" />
      <img v-if="card.name === 'goku'" class="front" src="../../assets/goku.jpg" />
      <img v-if="card.name === 'vegeta'" class="front" src="../../assets/vegeta.jpg" />

      <img class="back" src="../../assets/bluecard.jpg" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, PropType } from 'vue'
import { useStore } from 'vuex'
import { ICard } from '@/IType'
import { GameStoreKey } from '@/stores'

export default defineComponent({
  name: 'Card',
  props: {
    card: {
      type: Object as PropType<ICard>,
      required: true
    }
  },
  emits: {
    onFlip: (payload: ICard) => {
      return !!payload
    }
  },
  setup: (props, context) => {
    const { card } = toRefs(props)
    const { commit } = useStore(GameStoreKey)

    const doFlip = (e: MouseEvent) => {
      if (card.value.flipped) {
        return
      }
      commit('flips', [card.value])
      context.emit('onFlip', card.value)
    }

    return {
      card,
      doFlip
    }
  }
})
</script>

<style scoped>
.container {
  width: 100px;
  height: 121px;
  margin-right: 3px;
  cursor: pointer;
  position: relative;
  perspective: 800px;
  background-color: blue;
}

.card {
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
  background-color: blue;
}

.card.flipped {
  transform: rotateY(180deg);
}

.card img {
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  backface-visibility: hidden;
}

.card .back {
  background: blue;
  transform: rotateY(0deg);
}

.card .front {
  background: blue;
  transform: rotateY(180deg);
}

@media screen and (max-width: 450px) {
  .container {
    width: 92px;
    height: 111px;
    margin-right: 1px;
  }
}

@media screen and (max-width: 380px) {
  .container {
    width: 85px;
    height: 102px;
    margin-right: 1px;
  }
}

@media screen and (max-width: 360px) {
  .container {
    width: 70px;
    height: 84px;
    margin-right: 1px;
  }
}
</style>
