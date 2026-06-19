export type ColourPaletteRow = {
  token: string;
  hex: string;
  swatch?: string;
  usage: string;
};

type ColourPaletteTableProps = {
  title: string;
  rows: ColourPaletteRow[];
};

export default function ColourPaletteTable({
  title,
  rows,
}: ColourPaletteTableProps) {
  return (
    <div className="space-y-4 pt-2">
      <h4 className="text-base font-medium tracking-tight">{title}</h4>
      <div className="overflow-x-auto rounded-lg border border-border">
        <table className="w-full min-w-[480px] text-left text-sm">
          <thead>
            <tr className="border-b border-border">
              <th className="px-4 py-3 font-medium">Token</th>
              <th className="px-4 py-3 font-medium">Hex</th>
              <th className="px-4 py-3 font-medium">Usage</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.token} className="border-b border-border last:border-0">
                <td className="px-4 py-3 font-medium">{row.token}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    {row.swatch && (
                      <span
                        className="inline-block h-5 w-8 shrink-0 rounded border border-border"
                        style={{ backgroundColor: row.swatch }}
                        aria-hidden="true"
                      />
                    )}
                    <span className="text-muted">{row.hex}</span>
                  </div>
                </td>
                <td className="px-4 py-3 leading-relaxed text-muted">
                  {row.usage}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
