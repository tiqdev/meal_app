import AnimatedContainer from "@/components/AnimatedContainer";
import SettingsList from "@/components/SettingsList";

const SettingsPage = () => {
  return (
    <AnimatedContainer>
      <h1 className="title  mb-[20px]">Ayarlar</h1>
      <SettingsList />
    </AnimatedContainer>
  );
};

export default SettingsPage;
