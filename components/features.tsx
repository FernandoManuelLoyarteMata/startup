import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";

export default function Features() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-sky-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-sky-200/50">
              <span className="inline-flex bg-gradient-to-r from-sky-500 to-sky-200 bg-clip-text text-transparent">
                Multidisciplinary and Multicultural Expertise
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.sky.200),theme(colors.gray.50),theme(colors.sky.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              About Us Innovative AI-Based Diagnostics
            </h2>
            <p className="text-lg text-sky-200/65">
              Our team operates in a dynamic environment of multidisciplinary
              and multicultural knowledge. Through collaboration between experts
              in pathological anatomy, bioengineering, and microscopic image
              analysis, we develop and refine our AI-based diagnostic tools.
            </p>
          </div>
          <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <Image
              className="max-w-none"
              src={FeaturesImage}
              width={1104}
              height={384}
              alt="Features"
            />
          </div>
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.87683 5.54922C7.22615 5.43297 7.41494 5.056 7.29852 4.70725C7.18207 4.35853 6.80446 4.17004 6.45514 4.28629L5.96195 4.45041C5.45444 4.61928 5.02425 4.76241 4.68276 4.91826C4.31934 5.08408 4.00125 5.28756 3.74803 5.60676C3.49481 5.92592 3.36925 6.28167 3.2908 6.6728C3.21708 7.04037 3.17604 7.49121 3.12762 8.02309L2.50777 14.8301C2.46583 15.0673 2.44377 15.3114 2.44336 15.5606C2.4482 17.8847 4.33688 19.7833 6.66599 19.7833C8.76684 19.7833 10.5094 18.2517 10.8343 16.2459L11.029 16.1764C11.6569 15.9529 12.3428 15.9529 12.9707 16.1764L13.1654 16.2459C13.4903 18.2517 15.2328 19.7833 17.3337 19.7833C19.6628 19.7833 21.5514 17.8847 21.5563 15.5606C21.5559 15.3114 21.5338 15.0673 21.4919 14.8301L20.8721 8.02309C20.8236 7.49121 20.7826 7.04037 20.7089 6.6728C20.6304 6.28167 20.5048 5.92592 20.2517 5.60676C19.9984 5.28756 19.6803 5.08408 19.3169 4.91826C18.9754 4.76241 18.5453 4.61928 18.0378 4.45041L17.5445 4.28629C17.1952 4.17004 16.8177 4.35853 16.7012 4.70725C16.5847 5.056 16.7736 5.43297 17.1228 5.54922L17.5835 5.70249C18.1324 5.88515 18.4939 6.00639 18.7626 6.12904C19.0166 6.24495 19.1307 6.33784 19.2063 6.43327C19.2821 6.5287 19.3465 6.66075 19.4014 6.93422C19.4594 7.22343 19.4948 7.60258 19.5472 8.17774L19.9164 12.2323C19.2024 11.6805 18.3065 11.3521 17.3337 11.3521C15.2489 11.3521 13.5171 12.8604 13.1731 14.8435C12.4067 14.6222 11.5929 14.6222 10.8266 14.8435C10.4826 12.8604 8.75074 11.3521 6.66599 11.3521C5.6932 11.3521 4.79723 11.6805 4.08329 12.2323L4.12627 11.7604L4.4525 8.17774C4.50488 7.60258 4.5403 7.22343 4.5983 6.93422C4.65317 6.66075 4.71764 6.5287 4.79335 6.43327C4.86903 6.33784 4.98301 6.24495 5.2371 6.12904C5.50579 6.00639 5.86736 5.88515 6.41618 5.70249L6.87683 5.54922ZM20.1697 15.0141L20.2227 15.5964C20.2073 17.1762 18.9197 18.4521 17.3337 18.4521C15.7381 18.4521 14.4445 17.1607 14.4445 15.5677C14.4445 13.9748 15.7381 12.6833 17.3337 12.6833C18.7397 12.6833 19.9111 13.686 20.1697 15.0141ZM3.82997 15.0141L3.77695 15.5964C3.79238 17.1762 5.07991 18.4521 6.66599 18.4521C8.26164 18.4521 9.55516 17.1607 9.55516 15.5677C9.55516 13.9748 8.26164 12.6833 6.66599 12.6833C5.26 12.6833 4.08858 13.686 3.82997 15.0141Z"
                  fill="#0EA5E9"
                />
              </svg>

              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Expert Collaboration
              </h3>
              <p className="text-sky-200/65">
                Our models are created and studied through the collaboration of
                experts in various fields, ensuring comprehensive and accurate
                diagnostic tools.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-sky-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path fillOpacity=".48" d="M7 8V0H5v8h2Zm12 16v-4h-2v4h2Z" />
                <path d="M19 6H0v2h17v8H7v-6H5v8h19v-2h-5V6Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Training Modules
              </h3>
              <p className="text-sky-200/65">
                We provide essential training modules for new medical
                specialists, allowing pathologists in training to enhance their
                diagnostic skills using our AI models.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-sky-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path d="M23.414 6 18 .586 16.586 2l3 3H7a6 6 0 0 0-6 6h2a4 4 0 0 1 4-4h12.586l-3 3L18 11.414 23.414 6Z" />
                <path
                  fillOpacity=".48"
                  d="M13.01 12.508a2.5 2.5 0 0 0-3.502.482L1.797 23.16.203 21.952l7.71-10.17a4.5 4.5 0 1 1 7.172 5.437l-4.84 6.386-1.594-1.209 4.841-6.385a2.5 2.5 0 0 0-.482-3.503Z"
                />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Transparency and Review
              </h3>
              <p className="text-sky-200/65">
                We believe in the transparency of our methods. Our users have
                access to the background of the AI models they use, and we
                regularly share our results in scientific events and
                publications.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-sky-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path
                  fillOpacity=".48"
                  d="m3.031 9.05-.593-.805 1.609-1.187.594.804a6.966 6.966 0 0 1 0 8.276l-.594.805-1.61-1.188.594-.805a4.966 4.966 0 0 0 0-5.9Z"
                />
                <path d="m7.456 6.676-.535-.845 1.69-1.07.534.844a11.944 11.944 0 0 1 0 12.789l-.535.845-1.69-1.071.536-.845a9.944 9.944 0 0 0 0-10.647Z" />
                <path
                  d="m11.888 4.35-.514-.858 1.717-1.027.513.858a16.9 16.9 0 0 1 2.4 8.677 16.9 16.9 0 0 1-2.4 8.676l-.513.859-1.717-1.028.514-.858A14.9 14.9 0 0 0 14.003 12a14.9 14.9 0 0 0-2.115-7.65Z"
                  opacity=".48"
                />
                <path d="m16.321 2-.5-.866 1.733-1 .5.866A22 22 0 0 1 21 12c0 3.852-1.017 7.636-2.948 10.97l-.502.865-1.73-1.003.501-.865A19.878 19.878 0 0 0 19 12a20 20 0 0 0-2.679-10Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Continuous Improvement
              </h3>
              <p className="text-sky-200/65">
                Our commitment to continuous improvement drives us to work daily
                on developing AI-based functionalities, ensuring increasingly
                precise results.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-sky-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path
                  fillOpacity=".48"
                  d="M12 8.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                />
                <path d="m7.454 2.891.891-.454L7.437.655l-.891.454a12 12 0 0 0 0 21.382l.89.454.91-1.781-.892-.455a10 10 0 0 1 0-17.818ZM17.456 1.11l-.891-.454-.909 1.782.891.454a10 10 0 0 1 0 17.819l-.89.454.908 1.781.89-.454a12 12 0 0 0 0-21.382Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Community Engagement
              </h3>
              <p className="text-sky-200/65">
                We engage with the scientific community to ensure our methods
                are constantly reviewed and improved, fostering trust and
                reliability in our tools.
              </p>
            </article>
            <article>
              <svg
                className="mb-3 fill-sky-500"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
              >
                <path
                  fillOpacity=".48"
                  d="M19 8h5v2h-5V8Zm-4 5h9v2h-9v-2Zm9 5H11v2h13v-2Z"
                />
                <path d="M19.406 3.844 6.083 20.497.586 15 2 13.586l3.917 3.917L17.844 2.595l1.562 1.25Z" />
              </svg>
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Scientific Publications
              </h3>
              <p className="text-sky-200/65">
                We disclose our findings and advancements in recognized
                scientific publications, contributing to the broader medical and
                scientific community.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
