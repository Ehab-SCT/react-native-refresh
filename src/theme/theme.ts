import { Colors } from "react-native-ui-lib";



Colors.loadSchemes({
    light: {
      screenBG: 'transparent',
      textColor: Colors.yellow30,
      moonOrSun: Colors.yellow30,
      mountainForeground: Colors.green30,
      mountainBackground: Colors.green50,
      $backgroundSuccess: Colors.green40,
      $backgroundSuccessLight: Colors.red80
    },
    dark: {
      screenBG: Colors.grey10,
      textColor: Colors.red20,
      moonOrSun: Colors.grey80,
      mountainForeground: Colors.violet10,
      mountainBackground: Colors.violet20,
      $backgroundSuccess: Colors.green40,
      $backgroundSuccessLight: Colors.green70
    }
  });



export const toggleTheme = (theme: string) => {
if(theme=== "dark") {
    Colors.setScheme("light");
}else{
    Colors.setScheme("dark");
}


}