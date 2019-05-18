import React from "react";
import { View, Text, Image, Linking } from "react-native";
import Card from "./card";
import CardSection from "./cardsection";
import Button from "./button";

const AlbumDetail = ({ album }) => {
  const { title, artist, thumbnail_image, image, url } = album; //destructuring props
  return (
    <Card>
      <CardSection>
        <View style={styles.imageContStyle}>
          <Image style={styles.imageStyle} source={{ uri: thumbnail_image }} />
        </View>
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{title}</Text>
          <Text style={{ color: "#1c313a" }}>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={styles.albImageStyle} source={{ uri: image }} />
      </CardSection>
      <CardSection>
        <Button onPress={() => Linking.openURL(url)}>Buy Now</Button>
      </CardSection>
    </Card>
  );
};
const styles = {
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    color: "#000"
  },
  headerTextStyle: {
    fontSize: 18,
    color: "#000"
  },
  imageStyle: {
    height: 50,
    width: 50
  },
  imageContStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  albImageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
