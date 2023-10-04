import {TextInput} from 'react-native';
export default function LoginInput(props) {
  return <TextInput placeholder={props.placeholder} className="bg-white h-full w-full rounded-full border-2 border-primary-blue pl-7 text-lg" />;
}
