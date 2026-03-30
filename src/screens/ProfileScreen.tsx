import { ScrollView, StyleSheet } from "react-native";
import ProfileHeader from "../components/ProfileHeader";
import ProfileInfo from "../components/ProfileInfo";
import RepoCard from "../components/RepoCard";
import Stats from "../components/Stats";
import { user } from "../data/user";

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <ProfileHeader
        name={user.name}
        username={user.username}
        avatar={user.avatar}
      />

      <ProfileInfo bio={user.bio} location={user.location} />

      <Stats
        repos={user.repos}
        followers={user.followers}
        following={user.following}
      />

      {user.pinnedRepos.map((repo) => (
        <RepoCard key={repo.id} {...repo} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d1117",
    padding: 16,
  },
});
