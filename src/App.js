import * as React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom';

import AccountView from './views/accountView';
import AccountCreateView from './views/account/accountCreateView';
import AccountProfileView from './views/account/accountProfileView';
import AccountUpdateView from './views/account/accountUpdateView';
import DashboardView from './views/dashboardView';
import ExerciseView from './views/exerciseView';
import ExerciseDetailsView from './views/exercise/exerciseDetailsView';
import ExerciseListView from './views/exercise/exerciseListView';
import FoodView from "./views/foodView";
import FoodDetailsView from './views/food/foodDetailsView';
import FoodListView from './views/food/foodListView';
import GalleryView from './views/galleryView';
import GalleryImageView from './views/gallery/galleryImageView';
import GalleryListView from './views/gallery/galleryListView';
import PasswordUpdateView from './views/passwordUpdateView';
import QuestionnaireView from './views/questionnaireView';
import QuestionnairePage1View from './views/questionnaire/questionnairePage1View';
import QuestionnairePage2View from './views/questionnaire/questionnairePage2View';
import QuestionnairePage3View from './views/questionnaire/questionnairePage3View';
import QuestionnairePage4View from './views/questionnaire/questionnairePage4View';
import RestorePasswordView from './views/restorePasswordView';
import ReviewView from './views/reviewView';
import ReviewDetailsView from './views/review/reviewDetailsView';
import ReviewListView from './views/review/reviewListView';
import ScheduleView from './views/scheduleView';
import ScheduleCreateView from './views/schedule/scheduleCreateView';
import ScheduleDayView from './views/schedule/scheduleDayView';
import ScheduleListView from './views/schedule/scheduleListView';
import ScheduleMonthView from './views/schedule/scheduleListView';
import ScheduleUpdateView from './views/schedule/scheduleWeekView';
import SignInView from './views/signInView';
import SignUpView from './views/signUpView';
import WelcomeView from './views/welcomeView';
import WorkoutView from './views/workoutView';
import WorkoutCreateView from './views/workout/workoutCreateView';
import WorkoutListView from './views/workout/workoutListView';

import './App.css';


function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<WelcomeView/>}/>
            <Route exact path="/account" element={<AccountView/>}/>
            <Route exact path="/account/create" element={<AccountCreateView/>}/>
            <Route exact path="/account/profile" element={<AccountProfileView/>}/>
            <Route exact path="/account/update" element={<AccountUpdateView/>}/>
            <Route exact path="/dashboard" element={<DashboardView/>}/>
            <Route exact path="/exercise" element={<ExerciseView/>}/>
            <Route exact path="/exercise/details/*">
              <Route path=":id" element={<ExerciseDetailsView/>}/>
            </Route> 
            <Route exact path="/exercise/list" element={<ExerciseListView/>}/>
            <Route exact path="/food" element={<FoodView/>}/>
            <Route exact path="/food/details/*">
              <Route path=":id" element={<FoodDetailsView/>}/>
            </Route>
            <Route exact path="/food/list" element={<FoodListView/>}/>
            <Route exact path="/gallery" element={<GalleryView/>}/>
            <Route exact path="/gallery/image/*">
              <Route path=":id" element={<GalleryImageView/>}/>
            </Route>
            <Route exact path="/gallery/list" element={<GalleryListView/>}/>
            <Route exact path="/questionnaire" element={<QuestionnaireView/>}/>
            <Route exact path="/questionnaire/page/1" element={<QuestionnairePage1View/>}/>
            <Route exact path="/questionnaire/page/2" element={<QuestionnairePage2View/>}/>
            <Route exact path="/questionnaire/page/3" element={<QuestionnairePage3View/>}/>
            <Route exact path="/questionnaire/page/4" element={<QuestionnairePage4View/>}/>
            <Route exact path="/review" element={<ReviewView/>}/>
            <Route exact path="/review/details/*">
              <Route path=":id" element={<ReviewDetailsView/>}/>
            </Route>
            <Route exact path="/review/list" element={<ReviewListView/>}/>
            <Route exact path="/schedule" element={<ScheduleView/>}/>
            <Route exact path="/schedule/create" element={<ScheduleCreateView/>}/>
            <Route exact path="/schedule/day/*">
              <Route path=":id" element={<ScheduleDayView/>}/>
            </Route>
            <Route exact path="/schedule/list" element={<ScheduleListView/>}/>
            <Route exact path="/schedule/month/*">
              <Route path=":id" element={<ScheduleMonthView/>}/>
            </Route>
            <Route exact path="/schedule/update/*">
              <Route path=":id" element={<ScheduleUpdateView/>}/>
            </Route>
            <Route exact path="/update-password" element={<PasswordUpdateView/>}/>
            <Route exact path="/restore-password" element={<RestorePasswordView/>}/>
            <Route exact path="/signin" element={<SignInView/>}/>
            <Route exact path="/signup" element={<SignUpView/>}/>
            <Route exact path="/workout" element={<WorkoutView/>}/>
            <Route exact path="/workout/create" element={<WorkoutCreateView/>}/>
            <Route exact path="/workout/list" element={<WorkoutListView/>}/>
            <Route exact path="/workout/update/*">
              <Route path=":id" element={<WorkoutUpdateView/>}/>
            </Route>
        </Routes>
    </Router>
  );
}

export default App;
