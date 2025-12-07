"use client"

import Link from "next/link"
import { Shield, FileText, Cookie, Mail, Phone, MapPin } from "lucide-react"

export function LegalFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-[#0a4a68] via-[#0d5573] to-[#0a4a68] text-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              BCare
            </h3>
            <p className="text-gray-200 leading-relaxed mb-3 text-sm">
              منصة رائدة في مجال التأمين الإلكتروني، نقدم أفضل عروض التأمين على المركبات بأسعار تنافسية وخدمة متميزة.
            </p>
            <div className="flex gap-2">
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-base font-bold mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-yellow-400" />
              السياسات القانونية
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-200 hover:text-yellow-400 transition-colors flex items-center gap-2 group text-sm"
                >
                  <Shield className="w-3 h-3 group-hover:scale-110 transition-transform" />
                  <span>سياسة الخصوصية</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-200 hover:text-yellow-400 transition-colors flex items-center gap-2 group text-sm"
                >
                  <FileText className="w-3 h-3 group-hover:scale-110 transition-transform" />
                  <span>الشروط والأحكام</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-gray-200 hover:text-yellow-400 transition-colors flex items-center gap-2 group text-sm"
                >
                  <Cookie className="w-3 h-3 group-hover:scale-110 transition-transform" />
                  <span>سياسة الكوكيز</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-bold mb-3 flex items-center gap-2">
              <Mail className="w-4 h-4 text-yellow-400" />
              تواصل معنا
            </h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-200 text-sm">
                <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:info@becare.com" className="hover:text-yellow-400 transition-colors">
                  info@becare.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-200 text-sm">
                <Phone className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+966112345678" className="hover:text-green-400 transition-colors" dir="ltr">
                  +966 11 234 5678
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-200 text-sm">
                <MapPin className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="text-gray-300 text-xs text-center md:text-right">
            <p>© {currentYear} BCare. جميع الحقوق محفوظة.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 text-xs">
            <Link
              href="/privacy"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              الخصوصية
            </Link>
            <span className="text-gray-500">•</span>
            <Link
              href="/terms"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              الشروط
            </Link>
            <span className="text-gray-500">•</span>
            <Link
              href="/cookies"
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              الكوكيز
            </Link>
            <span className="text-gray-500">•</span>
            <button
              onClick={() => {
                localStorage.removeItem("cookie_consent")
                window.location.reload()
              }}
              className="text-gray-300 hover:text-yellow-400 transition-colors"
            >
              إعدادات الكوكيز
            </button>
          </div>
        </div>

        {/* Compliance Badges */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <div className="flex flex-wrap justify-center gap-4 items-center">
            <div className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <span className="text-[10px] text-gray-400">متوافق مع</span>
              <div className="text-xs font-bold text-white mt-0.5">GDPR</div>
            </div>
            <div className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <span className="text-[10px] text-gray-400">معتمد من</span>
              <div className="text-xs font-bold text-white mt-0.5">ساما</div>
            </div>
            <div className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <span className="text-[10px] text-gray-400">آمن</span>
              <div className="text-xs font-bold text-white mt-0.5">SSL/TLS</div>
            </div>
            <div className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
              <span className="text-[10px] text-gray-400">متوافق مع</span>
              <div className="text-xs font-bold text-white mt-0.5">PCI DSS</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
