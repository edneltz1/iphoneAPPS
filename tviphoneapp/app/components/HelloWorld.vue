<template>
    <Page class="page">
        <ActionBar title="Home" class="action-bar" backgroundColor="#ED1B24" textAlignment="center" t/>
        <ScrollView>
            <StackLayout class="home-panel">
                <!--Add your page content here-->


<ScrollView orientation="horizontal">
  <GridLayout class="m-15" columns="auto auto auto auto auto auto auto auto auto auto auto auto auto auto auto">
     <Label width="60" height="50" class="h3 m-15" col="0" text="Title 1" />
     <Label width="60" height="50" class="h3 m-15" col="1" text="Title 2" />
     <Label width="60" height="50" class="h3 m-15" col="2" text="Title 3" />
     <Label width="60" height="50" class="h3 m-15" col="3" text="Title 4" />
     <Label width="60" height="50" class="h3 m-15" col="4" text="Title 5" />
     <Label width="60" height="50" class="h3 m-15" col="5" text="Title 6" />
     <Label width="60" height="50" class="h3 m-15" col="6" text="Title 7" />
     <Label width="60" height="50" class="h3 m-15" col="7" text="Title 8" />
     <Label width="60" height="50" class="h3 m-15" col="8" text="Title 9" />
     <Label width="60" height="50" class="h3 m-15" col="9" text="Title 10" />
     <Label width="60" height="50" class="h3 m-15" col="10" text="Title 11" />
     <Label width="60" height="50" class="h3 m-15" col="11" text="Title 12" />
     <Label width="60" height="50" class="h3 m-15" col="12" text="Title 13" />
     <Label width="60" height="50" class="h3 m-15" col="13" text="Title 14" />
     <Label width="60" height="50" class="h3 m-15" col="14" text="Title 15" />
  </GridLayout>
</ScrollView>


                <Label textWrap="true" text="Play with NativeScript!" class="h2 description-label" />
                <Label textWrap="true" text="Write code in the editor or drag and drop components to build a NativeScript mobile application." class="h2 description-label" />
                <Label textWrap="true" text="Scan the QR code with your mobile device and watch the changes sync live while you play with the code." class="h2 description-label" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
export default {
    data () {
        return {
        };
    },
}
</script>

<style scoped>
.home-panel {
    vertical-align: center;
    font-size: 20;
    margin: 15;
}

.description-label {
    margin-bottom: 15;
}
</style>
