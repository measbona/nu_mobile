import {Navigation} from 'react-native-navigation';
import IoniIcon from 'react-native-vector-icons/Ionicons';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import utils from '../utils';

import Home from '../views/Home';
import Notification from '../views/Notification';
import ContactUs from '../views/ContactUs';
import NofityModal from '../views/Modal/NotifyModal';
import Events from '../views/Events';
import Jobs from '../views/Jobs';
import AboutUs from '../views/AboutUs';
import EventDetail from '../views/Events/EventDetail';
import JobDetail from '../views/Jobs/JobDetail';

export const HOME = 'NU.Home';
export const NOTIFICATION = 'NU.Notification';
export const CONTACT_US = 'NU.ContactUs';
export const NOTIFY_MODAL = 'NU.NofityModal';
export const EVENTS = 'NU.Events';
export const JOBS = 'NU.Jobs';
export const ABOUT_US = 'NU.AboutUs';
export const EVENT_DETAIL = 'NU.EventDetail';
export const JOB_DETAIL = 'NU.JobDetail';

export const Screens = new Map();

Screens.set(HOME, Home);
Screens.set(NOTIFICATION, Notification);
Screens.set(CONTACT_US, ContactUs);
Screens.set(NOTIFY_MODAL, NofityModal);
Screens.set(EVENTS, Events);
Screens.set(JOBS, Jobs);
Screens.set(ABOUT_US, AboutUs);
Screens.set(EVENT_DETAIL, EventDetail);
Screens.set(JOB_DETAIL, JobDetail);

const hideBottomTabs = {
  bottomTabs: {
    visible: false,
    drawBehind: true,
    animate: true,
  },
};

const bottomTabStack = ({id, component, text, icon}) => ({
  stack: {
    children: [{component: {id, name: component}}],
    options: {
      layout: {
        backgroundColor: utils.colors.white,
        components: utils.colors.white,
      },
      bottomTab: {
        text,
        icon,
        fontSize: 9,
        textColor: utils.colors.grey,
        fontFamily: 'Montserrat-Bold',
        selectedTextColor: utils.colors.blue,
        selectedIconColor: utils.colors.blue,
      },
    },
  },
});

export const popBack = (componentId) => Navigation.pop(componentId);

export const dismissOverLay = () => Navigation.dismissAllOverlays();

export const setRootHome = async () => {
  const homeIcon = await IoniIcon.getImageSource('home', 23, utils.colors.grey);
  const bellIcon = await IoniIcon.getImageSource(
    'notifications',
    23,
    utils.colors.grey,
  );
  const contactIcon = await MIcon.getImageSource(
    'contact-mail',
    23,
    utils.colors.grey,
  );

  const TABS = [
    {id: 'HOME', component: HOME, text: 'Home', icon: homeIcon},
    {
      id: 'NOTIFICATION',
      component: NOTIFICATION,
      text: 'Notification',
      icon: bellIcon,
    },
    {
      id: 'CONTACT_US',
      component: CONTACT_US,
      text: 'Contact Us',
      icon: contactIcon,
    },
  ];

  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: TABS.map(bottomTabStack),
      },
    },
  });
};

export const showNotify = (passProps) => {
  Navigation.showOverlay({
    component: {
      name: NOTIFY_MODAL,
      passProps,
      options: {
        layout: {
          backgroundColor: 'transparent',
          componentBackgroundColor: 'transparent',
        },
        modalPresentationStyle: 'overCurrentContext',
      },
    },
  });
};

export const goToEvents = (componentId) => {
  Navigation.push(componentId, {
    component: {
      name: EVENTS,
      options: {
        ...hideBottomTabs,
        layout: {
          backgroundColor: utils.colors.white,
          componentBackgroundColor: utils.colors.white,
        },
      },
    },
  });
};

export const goToJobs = (componentId) => {
  Navigation.push(componentId, {
    component: {
      name: JOBS,
      options: {
        ...hideBottomTabs,
        layout: {
          backgroundColor: utils.colors.white,
          componentBackgroundColor: utils.colors.white,
        },
      },
    },
  });
};

export const goToAbout = (componentId) => {
  Navigation.push(componentId, {
    component: {
      name: ABOUT_US,
      options: {
        ...hideBottomTabs,
        layout: {
          backgroundColor: utils.colors.white,
          componentBackgroundColor: utils.colors.white,
        },
      },
    },
  });
};

export const showEventDetail = (componentId, passProps) => {
  Navigation.push(componentId, {
    component: {
      name: EVENT_DETAIL,
      passProps,
      options: {
        ...hideBottomTabs,
        layout: {
          backgroundColor: utils.colors.white,
          componentBackgroundColor: utils.colors.white,
        },
      },
    },
  });
};

export const showJobDetail = (componentId, passProps) => {
  Navigation.push(componentId, {
    component: {
      name: JOB_DETAIL,
      passProps,
      options: {
        ...hideBottomTabs,
        layout: {
          backgroundColor: utils.colors.white,
          componentBackgroundColor: utils.colors.white,
        },
      },
    },
  });
};
