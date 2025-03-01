import { WaylandProtocolModel } from './common'
import { compositorRegistry } from '../data/compositor-registry'

export const WaylandCompositors: React.FC<{
    element: WaylandProtocolModel
}> = ({ element }) => {
    const rows = element.interfaces
        .map((childElement) => {
            const versions = compositorRegistry.map((comp) => {
                const info = comp.info.globals.find(
                    (global) => global.interface === childElement.name
                )

                if (info !== undefined) {
                    return info.version
                } else {
                    return null
                }
            })

            return {
                name: childElement.name,
                versions,
            }
        })
        .filter((childElement) => childElement.versions.some((v) => v != null))
        .map((childElement, index) => {
            const name = (
                <td className="border-b border-gray-300 dark:border-gray-900 p-2">
                    {childElement.name}
                </td>
            )

            return (
                <tr key={index}>
                    {name}
                    {childElement.versions.map((version) => {
                        if (version !== null) {
                            return (
                                <td className="border-b border-gray-300 dark:border-gray-900 p-2">
                                    <div className="flex justify-center">
                                        <div className="w-7 h-7 leading-7 bg-emerald-500 text-white rounded-lg text-center">
                                            {version}
                                        </div>
                                    </div>
                                </td>
                            )
                        } else {
                            return (
                                <td className="border-b border-gray-300 dark:border-gray-900 p-2">
                                    <div className="flex justify-center">
                                        <div className="w-7 h-7 leading-7 bg-gray-900 text-white rounded-lg text-center">
                                            x
                                        </div>
                                    </div>
                                </td>
                            )
                        }
                    })}
                </tr>
            )
        })

    return (
        <div className="mb-10">
            <h4
                id="compositor-support"
                className="flex items-center text-xl mt-6"
            >
                <a href="#compositor-support">
                    <span className="codicon codicon-debug-disconnect mr-1"></span>
                    Compositor Support
                </a>
            </h4>

            <div className="flex md:justify-center items-center overflow-x-auto">
                {rows.length !== 0 ? (
                    <CanIUseTable rows={rows} />
                ) : (
                    <NotFound />
                )}
            </div>
        </div>
    )
}

const CanIUseTable: React.FC<{
    rows: JSX.Element[]
}> = ({ rows }) => {
    return (
        <table className="border-colapse bg-gray-200 rounded dark:bg-neutral-900">
            <thead>
                <tr>
                    <th className="p-4"></th>
                    {compositorRegistry.map((comp) => (
                        <th className="p-4">
                            <div className="flex justify-center items-center">
                                {comp.name}
                                <img
                                    alt={comp.name}
                                    src={`logos/${comp.icon}.svg`}
                                    className="w-5 ml-2 dark:invert"
                                />
                            </div>
                        </th>
                    ))}
                </tr>
            </thead>

            <tbody className="bg-white dark:bg-neutral-800">{rows}</tbody>
        </table>
    )
}

const NotFound: React.FC = () => {
    return (
        <>
            <span
                className="codicon codicon-search mr-3"
                style={{ fontSize: 50 }}
            ></span>
            <span className="text-xl">No compositor support found</span>
        </>
    )
}
