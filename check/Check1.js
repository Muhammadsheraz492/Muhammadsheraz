<View style={{ flex: 1 }}>
<DrawerContentScrollView {...props}>
  <View
    style={{
      left: "5%",
      top: "0%",
      flexDirection: "row",
      height: "30%",
      width: "100%",
    }}
  >
    <Avatar.Image
      source={{
        uri: "https://scontent.flhe2-1.fna.fbcdn.net/v/t1.6435-9/119168178_790408478417016_779506481472359204_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGecmVNNce5I7ytGw5mVV80nqNy0tpeLrOeo3LS2l4us_fFVWa76928iVs32bG15jU4UcUXCY7xjHLIGLOAOmjS&_nc_ohc=7iPUHaYgk0kAX9aC8SS&_nc_ht=scontent.flhe2-1.fna&oh=eb5a2cc0e41c2576be90c32fda9d8556&oe=6189D263",
      }}
      size={70}
    />

    <View style={{ left: "50%", top: "2%", flexDirection: "column" }}>
      <Title>Muhammad sheraz</Title>
    </View>
    <View style={{ top: "12%", left: "-570%" }}>
      <Caption>@sheraz492</Caption>
    </View>
  </View>

  <View
    style={{
      left: "30%",
      top: "130%",
      flexDirection: "row",
      height: "30%",
      width: "100%",
      position: "absolute",
    }}
  >
    <View>
      <Paragraph>80</Paragraph>
    </View>
  </View>
</DrawerContentScrollView>
<Drawer.Section>
  <DrawerItem
    icon={({ color }) => (
      <Octicons name="sign-out" size={24} color={color} />
    )}
    label="Sign Out"
  />
</Drawer.Section>