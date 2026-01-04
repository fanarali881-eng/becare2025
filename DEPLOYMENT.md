# دليل النشر على Vercel

## معلومات المشروع
- **اسم المشروع**: BeCare 2025
- **Firebase Project ID**: bcare2
- **Framework**: Next.js 15.1.5

## متطلبات Firebase

### 1. إعدادات Firebase Console
تأكد من تفعيل الخدمات التالية في Firebase Console:
- **Firestore Database**: لتخزين بيانات التطبيقات والرسائل
- **Realtime Database**: للبيانات الفورية (إذا كانت مطلوبة)
- **Authentication**: إذا كنت تستخدم المصادقة

### 2. المتغيرات البيئية المطلوبة

يجب إضافة المتغيرات التالية في إعدادات Vercel:

#### متغيرات Firebase (إلزامية):
```
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=bcare2.firebaseapp.com
NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://bcare2-default-rtdb.firebaseio.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=bcare2
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=bcare2.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=104811555110210541263
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX
```

#### متغيرات إضافية:
```
PROXY_SECRET=Qw@123123@Qw
```

## خطوات النشر على Vercel

### الطريقة 1: عبر Vercel CLI

1. **تثبيت Vercel CLI**:
```bash
npm i -g vercel
```

2. **تسجيل الدخول**:
```bash
vercel login
```

3. **النشر**:
```bash
cd /path/to/becare2025
vercel --prod
```

### الطريقة 2: عبر Vercel Dashboard

1. اذهب إلى [Vercel Dashboard](https://vercel.com/dashboard)
2. اضغط على "Add New Project"
3. اختر الريبو: `fanarali881-eng/becare2025`
4. أضف المتغيرات البيئية في قسم "Environment Variables"
5. اضغط على "Deploy"

### الطريقة 3: عبر Vercel MCP (الطريقة الموصى بها)

استخدم أدوات Vercel MCP المتاحة لإدارة المشروع والنشر مباشرة.

## بعد النشر

### 1. التحقق من الاتصال بـ Firebase
- افتح Developer Console في المتصفح
- تحقق من عدم وجود أخطاء في الاتصال بـ Firebase
- تأكد من أن البيانات تُحفظ بشكل صحيح في Firestore

### 2. اختبار الوظائف الأساسية
- ✅ تعبئة النماذج
- ✅ حفظ البيانات في Firebase
- ✅ عرض البيانات من Firebase
- ✅ نظام الرسائل (Chat)
- ✅ API Proxy للمركبات

### 3. مراقبة الأداء
- استخدم Vercel Analytics لمراقبة الأداء
- راقب Firebase Usage في Firebase Console
- تحقق من Logs في Vercel Dashboard

## الأمان

### ملفات محمية (لا يتم رفعها إلى Git):
- `.env.local` - المتغيرات البيئية المحلية
- `bcare2-firebase-adminsdk.json` - مفتاح Firebase Admin SDK
- أي ملف يحتوي على `firebase-adminsdk` في اسمه

### ملاحظات أمنية:
1. **لا تشارك** ملف Firebase Admin SDK مع أي شخص
2. **لا ترفع** المتغيرات البيئية إلى Git
3. **استخدم** Vercel Environment Variables لتخزين الأسرار
4. **فعّل** Firebase Security Rules لحماية البيانات

## استكشاف الأخطاء

### خطأ: "Firebase not initialized"
- تأكد من إضافة جميع متغيرات Firebase البيئية في Vercel
- تحقق من صحة قيم المتغيرات

### خطأ: "Permission denied"
- راجع Firebase Security Rules
- تأكد من تفعيل Firestore Database

### خطأ: "Build failed"
- تحقق من Build Logs في Vercel
- تأكد من تثبيت جميع التبعيات بشكل صحيح
- جرب تشغيل `pnpm install && pnpm build` محلياً

## الدعم

للحصول على المساعدة:
1. راجع [Vercel Documentation](https://vercel.com/docs)
2. راجع [Firebase Documentation](https://firebase.google.com/docs)
3. تحقق من Issues في GitHub Repository

---

**آخر تحديث**: يناير 2026
