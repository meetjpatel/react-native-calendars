import {StyleSheet, Platform} from 'react-native';
import * as defaultStyle from '../../style';

const STYLESHEET_ID = 'stylesheet.calendar.header';

export default function(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: '18%',
      paddingRight: '18%',
      alignItems: 'center'
    },
    monthText: {
      fontSize: appStyle.textMonthFontSize,
      fontFamily: 'Lato-Regular',
      fontWeight: '700',
      color: appStyle.monthTextColor,
      margin: 10
    },
    arrow: {
      padding: 10
    },
    arrowImage: {
      ...Platform.select({
        ios: {
          //tintColor: appStyle.arrowColor
          height: 20,
          width: 20,
        },
        android: {
          //tintColor: appStyle.arrowColor
          height: 20,
          width: 20,
        }
      })
    },
    week: {
      marginTop: 7,
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    dayHeader: {
      marginTop: 2,
      marginBottom: 7,
      width: 32,
      textAlign: 'center',
      fontSize: appStyle.textDayHeaderFontSize,
      fontFamily: 'Lato-Regular',
      color: appStyle.textSectionTitleColor
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
