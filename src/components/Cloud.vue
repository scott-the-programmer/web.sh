<template>
  <section class=" pt-10">
    <menu-header heading="Cloud"></menu-header>
    <item
      :imageSvg="require('@/assets/icons/azure.svg')"
      description="Well-versed in the Azure ecosystem! 
      From giving talks about IaC driven Azure to 
      the nitty gritty Azure Resource Management API"
    ></item>
    <item
      :imageSvg="require('@/assets/icons/pulumi.svg')"
      description="My go-to IaC tool. Absolutely love writing
      IaC projects with a general-purpose programming language.
      I also think the Azure-Native provider is amazing!"
    ></item>
    <item
      :imageSvg="require('@/assets/icons/terraform.png')"
      description="I've gone quite in-depth with Terraform to the
      point of writing custom providers and TDD HCL"
    ></item>
    <item
      :imageSvg="require('@/assets/icons/k8s.png')"
      description="Can't be cool without Kube (AKS / EKS)! Go-to runtime 
      for web applications built for scale"
    ></item>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuHeader from '@/components/MenuHeader.vue';
import Item from '@/components/Item.vue';

export default defineComponent({
  components: { MenuHeader, Item },
});
</script>

<style scoped></style>
