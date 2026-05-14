export default function Footer() {
  return (
    <footer className="bg-green-950 px-6 py-12 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-2xl font-bold">Anser</h3>

          <p className="mt-4 max-w-md leading-7 text-green-100">
            Procurement, training and sustainability support for organisations
            seeking practical long-term value and operational improvement.
          </p>
        </div>

        <div className="space-y-2 text-sm text-green-100">
          <p>22H Axis Business Park</p>
          <p>Tullamore, Co. Offaly</p>
          <p>R35 YX52</p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-green-900 pt-6 text-sm text-green-200">
        © 2026 Anser Procurement Ltd. All rights reserved.
      </div>
    </footer>
  );
}