import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const ReactTabs = (props) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Music', icon: { uri: 'https://img.icons8.com/material-sharp/24/000000/cloud-network.png' } },
    { key: 'albums', title: 'Albums', icon: { uri: 'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400' } },
    { key: 'recents', title: 'Recents', icon: { uri: 'https://avatars0.githubusercontent.com/u/17571969?v=3&s=400' }},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default ReactTabs;