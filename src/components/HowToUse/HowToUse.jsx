import React from "react";
import "./HowToUse.css";
import imageHow from "../../images/card3.jpg";
const HowToUse = () => {
  return (
    <section className="howToUse">
      <div className="howToUse_container">
        <div className="howToUse_container_content">
          <h2>الوصف</h2>
          <p>بطاقة عمل رقمية ذكية وسهلة</p>
          <p>
            كل اللي عليك انك تسوي صفحتك في التطبيق وتربطها بالبطاقة تطبيق تابني
          </p>
          <h4>محد يحتاج التطبيق عشان يستقبل معلوماتك</h4>
          <p>عندك خيارات تصمم فيها بطاقتك</p>
          <p className="desc-note">- تقدر تحط اسمك</p>
          <p className="desc-note">- تقدر تحط شعارك - اختياري</p>
          <p>
            اذا تبي بطاقة خاصة بشركتك ، راسلنا على الايميل بتصميمك الخاص ارسل
            تصميمك الخاص <br /> وشعارك على ايميل فريق التصميم
          </p>
          <p className="email_p">
            <a href="mailto: sa.tapni@tapni.co">sa.tapni@tapni.co</a>
          </p>
          <h4>في لمسة بس شارك كل معلوماتك</h4>
          <ul>
            <li>حسابات التواصل الاجتماعي</li>
            <li>ارقامك ، حساباتك في البرامج ، ايميلك</li>
            <li>مقاطع الفيديو والصور والموسيقى</li>
            <li>تطبيقات الدفع</li>
            <li>روابط موقعك ومتجرك</li>
          </ul>
          <h4>صممت لتدوم</h4>
          <p>
            لاتشيل هم الموية مع بطاقات تابني ، كل منتجاتنا مقاومة للموية
            والسوائل
          </p>
          <h4>موب لازم تطبيق</h4>
          <p>الطرف الثاني ما يحتاج التطبيق عشان يستقبل معلوماتك</p>
          <h4>متوافقة مع كل الاجهزة</h4>
          <p>
            بطاقتك متوافقه مع جميع الاجهزة تقريبا تأكد من جهازك موجود في قائمة
            الأجهزة المتوافقة
          </p>
        </div>
        <div className="howToUse_container_image">
          <img src={imageHow} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
