import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
  name: string;
  username: string;
  avatar: string;
};

export default function ProfileHeader({ name, username, avatar }: Props) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.username}>@{username}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  avatar: { width: 100, height: 100, borderRadius: 50 },
  name: { color: "#fff" },
  username: { color: "#aaa" },
});