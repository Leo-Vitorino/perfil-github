import { StyleSheet, Text, View } from "react-native";

type Props = {
  bio: string;
  location: string;
};

export default function ProfileInfo({ bio, location }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.bio}>{bio}</Text>
      <Text style={styles.info}>📍 {location}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 15 },
  bio: { color: "#c9d1d9", marginBottom: 5 },
  info: { color: "#8b949e" },
});