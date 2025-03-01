import { WaylandProtocol } from '../model/wayland'
import {
    WaylandProtocolMetadata,
    WaylandProtocolSource,
    WaylandProtocolStability,
} from '../model/wayland-protocol-metadata'

export interface WaylandProtocolRegistryItem extends WaylandProtocolMetadata {
    protocol: WaylandProtocol
}

const protocols: WaylandProtocolRegistryItem[] = [
    {
        id: 'wayland',
        name: 'Wayland',
        source: WaylandProtocolSource.WaylandCore,
        stability: WaylandProtocolStability.Stable,
        protocol: require('./protocols/wayland.json'),
    },
    {
        id: 'presentation-time',
        name: 'Presentation time',
        source: WaylandProtocolSource.WaylandProtocols,
        stability: WaylandProtocolStability.Stable,
        protocol: require('./protocols/presentation-time.json'),
    },
    {
        id: 'viewporter',
        name: 'Viewporter',
        source: WaylandProtocolSource.WaylandProtocols,
        stability: WaylandProtocolStability.Stable,
        protocol: require('./protocols/viewporter.json'),
    },
    {
        id: 'xdg-shell',
        name: 'XDG shell',
        source: WaylandProtocolSource.WaylandProtocols,
        stability: WaylandProtocolStability.Stable,
        protocol: require('./protocols/xdg-shell.json'),
    },
    {
        id: 'xdg-activation-v1',
        name: 'XDG activation',
        source: WaylandProtocolSource.WaylandProtocols,
        stability: WaylandProtocolStability.Staging,
        protocol: require('./protocols/xdg-activation-v1.json'),
    },
    {
        id: 'drm-lease-v1',
        name: 'DRM lease',
        source: WaylandProtocolSource.WaylandProtocols,
        stability: WaylandProtocolStability.Staging,
        protocol: require('./protocols/drm-lease-v1.json'),
    },
    {
        id: 'ext-session-lock-v1',
        name: 'Session lock',
        source: WaylandProtocolSource.WaylandProtocols,
        stability: WaylandProtocolStability.Staging,
        protocol: require('./protocols/ext-session-lock-v1.json'),
    },
    {
        id: 'single-pixel-buffer-v1',
        name: 'Single-pixel buffer',
        source: WaylandProtocolSource.WaylandProtocols,
        stability: WaylandProtocolStability.Staging,
        protocol: require('./protocols/single-pixel-buffer-v1.json'),
    },
    {
        id: 'content-type-v1',
        name: 'Content type hint',
        source: WaylandProtocolSource.WaylandProtocols,
        stability: WaylandProtocolStability.Staging,
        protocol: require('./protocols/content-type-v1.json'),
    },
    {
        id: 'ext-idle-notify-v1',
        name: 'Idle notify',
        source: WaylandProtocolSource.WaylandProtocols,
        stability: WaylandProtocolStability.Staging,
        protocol: require('./protocols/ext-idle-notify-v1.json'),
    },
    {
        id: 'tearing-control-v1',
        name: 'Tearing control',
        source: WaylandProtocolSource.WaylandProtocols,
        stability: WaylandProtocolStability.Staging,
        protocol: require('./protocols/tearing-control-v1.json'),
    },
    {
        id: 'xwayland-shell-v1',
        name: 'Xwayland shell',
        source: WaylandProtocolSource.WaylandProtocols,
        stability: WaylandProtocolStability.Staging,
        protocol: require('./protocols/xwayland-shell-v1.json'),
    },
    {
        id: 'fractional-scale-v1',
        name: 'Fractional scale',
        source: WaylandProtocolSource.WaylandProtocols,
        stability: WaylandProtocolStability.Staging,
        protocol: require('./protocols/fractional-scale-v1.json'),
    },
    {
        id: 'fullscreen-shell-unstable-v1',
        name: 'Fullscreen shell',
        source: WaylandProtocolSource.WaylandProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/fullscreen-shell-unstable-v1.json'),
    },
    {
        id: 'idle-inhibit-unstable-v1',
        name: 'Idle inhibit',
        source: WaylandProtocolSource.WaylandProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/idle-inhibit-unstable-v1.json'),
    },
    {
        id: 'input-method-unstable-v1',
        name: 'Input method',
        source: WaylandProtocolSource.WaylandProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/input-method-unstable-v1.json'),
    },
    {
        id: 'input-timestamps-unstable-v1',
        name: 'Input timestamps',
        source: WaylandProtocolSource.WaylandProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/input-timestamps-unstable-v1.json'),
    },
    {
        id: 'keyboard-shortcuts-inhibit-unstable-v1',
        name: 'Keyboard shortcuts inhibit',
        source: WaylandProtocolSource.WaylandProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/keyboard-shortcuts-inhibit-unstable-v1.json'),
    },
    {
        id: 'linux-dmabuf-unstable-v1',
        name: 'Linux DMA-BUF',
        source: WaylandProtocolSource.WaylandProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/linux-dmabuf-unstable-v1.json'),
    },
    {
        id: 'linux-explicit-synchronization-unstable-v1',
        name: 'Linux explicit synchronization (dma-fence)',
        source: WaylandProtocolSource.WaylandProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/linux-explicit-synchronization-unstable-v1.json'),
    },
    {
        id: 'pointer-constraints-unstable-v1',
        name: 'Pointer constraints',
        source: WaylandProtocolSource.WaylandProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/pointer-constraints-unstable-v1.json'),
    },
    {
        id: 'pointer-gestures-unstable-v1',
        name: 'Pointer gestures',
        source: WaylandProtocolSource.WaylandProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/pointer-gestures-unstable-v1.json'),
    },
    {
        id: 'primary-selection-unstable-v1',
        name: 'Primary selection',
        source: WaylandProtocolSource.WaylandProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/primary-selection-unstable-v1.json'),
    },
    {
        id: 'relative-pointer-unstable-v1',
        name: 'Relative pointer',
        source: WaylandProtocolSource.WaylandProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/relative-pointer-unstable-v1.json'),
    },
    {
        id: 'tablet-unstable-v2',
        name: 'Tablet',
        source: WaylandProtocolSource.WaylandProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/tablet-unstable-v2.json'),
    },
    {
        id: 'text-input-unstable-v3',
        name: 'Text input',
        source: WaylandProtocolSource.WaylandProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/text-input-unstable-v3.json'),
    },
    {
        id: 'xdg-decoration-unstable-v1',
        name: 'XDG decoration',
        source: WaylandProtocolSource.WaylandProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/xdg-decoration-unstable-v1.json'),
    },
    {
        id: 'xdg-foreign-unstable-v2',
        name: 'XDG foreign',
        source: WaylandProtocolSource.WaylandProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/xdg-foreign-unstable-v2.json'),
    },
    {
        id: 'xdg-output-unstable-v1',
        name: 'XDG output',
        source: WaylandProtocolSource.WaylandProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/xdg-output-unstable-v1.json'),
    },
    {
        id: 'xwayland-keyboard-grab-unstable-v1',
        name: 'XWayland keyboard grabbing',
        source: WaylandProtocolSource.WaylandProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/xwayland-keyboard-grab-unstable-v1.json'),
    },
    {
        id: 'wlr-data-control-unstable-v1',
        name: 'wlr data control',
        source: WaylandProtocolSource.WlrProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/wlr-data-control-unstable-v1.json'),
    },
    {
        id: 'wlr-export-dmabuf-unstable-v1',
        name: 'wlr export DMA-BUF',
        source: WaylandProtocolSource.WlrProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/wlr-export-dmabuf-unstable-v1.json'),
    },
    {
        id: 'wlr-foreign-toplevel-management-unstable-v1',
        name: 'wlr foreign toplevel management',
        source: WaylandProtocolSource.WlrProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/wlr-foreign-toplevel-management-unstable-v1.json'),
    },
    {
        id: 'wlr-gamma-control-unstable-v1',
        name: 'wlr gamma control',
        source: WaylandProtocolSource.WlrProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/wlr-gamma-control-unstable-v1.json'),
    },
    {
        id: 'wlr-input-inhibitor-unstable-v1',
        name: 'wlr input inhibitor',
        source: WaylandProtocolSource.WlrProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/wlr-input-inhibitor-unstable-v1.json'),
    },
    {
        id: 'wlr-layer-shell-unstable-v1',
        name: 'wlr layer shell',
        source: WaylandProtocolSource.WlrProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/wlr-layer-shell-unstable-v1.json'),
    },
    {
        id: 'wlr-output-management-unstable-v1',
        name: 'wlr output management',
        source: WaylandProtocolSource.WlrProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/wlr-output-management-unstable-v1.json'),
    },
    {
        id: 'wlr-output-power-management-unstable-v1',
        name: 'wlr output power management',
        source: WaylandProtocolSource.WlrProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/wlr-output-power-management-unstable-v1.json'),
    },
    {
        id: 'wlr-screencopy-unstable-v1',
        name: 'wlr screencopy',
        source: WaylandProtocolSource.WlrProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/wlr-screencopy-unstable-v1.json'),
    },
    {
        id: 'wlr-virtual-pointer-unstable-v1',
        name: 'wlr virtual pointer',
        source: WaylandProtocolSource.WlrProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/wlr-virtual-pointer-unstable-v1.json'),
    },
    {
        id: 'kde-appmenu',
        name: 'KDE AppMenu',
        source: WaylandProtocolSource.KDEProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/kde-appmenu.json'),
    },
    {
        id: 'kde-blur',
        name: 'KDE blur',
        source: WaylandProtocolSource.KDEProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/kde-blur.json'),
    },
    {
        id: 'kde-contrast',
        name: 'KDE contrast',
        source: WaylandProtocolSource.KDEProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/kde-contrast.json'),
    },
    {
        id: 'kde-dpms',
        name: 'KDE DPMS',
        source: WaylandProtocolSource.KDEProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/kde-dpms.json'),
    },
    {
        id: 'kde-fake-input',
        name: 'KDE fake input',
        source: WaylandProtocolSource.KDEProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/kde-fake-input.json'),
    },
    {
        id: 'kde-idle',
        name: 'KDE idle',
        source: WaylandProtocolSource.KDEProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/kde-idle.json'),
    },
    {
        id: 'kde-keystate',
        name: 'KDE key state',
        source: WaylandProtocolSource.KDEProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/kde-keystate.json'),
    },
    {
        id: 'kde-lockscreen-overlay-v1',
        name: 'KDE lockscreen overlay',
        source: WaylandProtocolSource.KDEProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/kde-lockscreen-overlay-v1.json'),
    },
    {
        id: 'kde-output-management',
        name: 'KDE output management',
        source: WaylandProtocolSource.KDEProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/kde-output-management.json'),
    },
    {
        id: 'kde-output-management-v2',
        name: 'KDE output management v2',
        source: WaylandProtocolSource.KDEProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/kde-output-management-v2.json'),
    },
    {
        id: 'kde-outputdevice',
        name: 'KDE output device',
        source: WaylandProtocolSource.KDEProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/kde-outputdevice.json'),
    },
    {
        id: 'kde-output-device-v2',
        name: 'KDE output device v2',
        source: WaylandProtocolSource.KDEProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/kde-output-device-v2.json'),
    },
    {
        id: 'kde-output-order-v1',
        name: 'KDE output order',
        source: WaylandProtocolSource.KDEProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/kde-output-order-v1.json'),
    },
    {
        id: 'kde-plasma-shell',
        name: 'KDE plasma shell',
        source: WaylandProtocolSource.KDEProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/kde-plasma-shell.json'),
    },
    {
        id: 'kde-plasma-virtual-desktop',
        name: 'KDE plasma virtual desktop',
        source: WaylandProtocolSource.KDEProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/kde-plasma-virtual-desktop.json'),
    },
    {
        id: 'kde-plasma-window-management',
        name: 'KDE plasma window management',
        source: WaylandProtocolSource.KDEProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/kde-plasma-window-management.json'),
    },
    {
        id: 'kde-primary-output-v1',
        name: 'KDE primary output',
        source: WaylandProtocolSource.KDEProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/kde-primary-output-v1.json'),
    },
    {
        id: 'kde-zkde-screencast-unstable-v1',
        name: 'KDE screencast',
        source: WaylandProtocolSource.KDEProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/kde-zkde-screencast-unstable-v1.json'),
    },
    {
        id: 'kde-server-decoration',
        name: 'KDE server decoration',
        source: WaylandProtocolSource.KDEProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/kde-server-decoration.json'),
    },
    {
        id: 'kde-server-decoration-palette',
        name: 'KDE server decoration palette',
        source: WaylandProtocolSource.KDEProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/kde-server-decoration-palette.json'),
    },
    {
        id: 'kde-shadow',
        name: 'KDE shadow',
        source: WaylandProtocolSource.KDEProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/kde-shadow.json'),
    },
    {
        id: 'kde-slide',
        name: 'KDE slide',
        source: WaylandProtocolSource.KDEProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/kde-slide.json'),
    },
    {
        id: 'ivi-application',
        name: 'In-vehicle infotainment application',
        source: WaylandProtocolSource.WestonProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/ivi-application.json'),
    },
    {
        id: 'ivi-hmi-controller',
        name: 'In-vehicle infotainment HMI controller',
        source: WaylandProtocolSource.WestonProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/ivi-hmi-controller.json'),
    },
    {
        id: 'text-cursor-position',
        name: 'Text cursor position',
        source: WaylandProtocolSource.WestonProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/text-cursor-position.json'),
    },
    {
        id: 'weston-content-protection',
        name: 'Weston content protection',
        source: WaylandProtocolSource.WestonProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/weston-content-protection.json'),
    },
    {
        id: 'weston-debug',
        name: 'Weston debug',
        source: WaylandProtocolSource.WestonProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/weston-debug.json'),
    },
    {
        id: 'weston-desktop-shell',
        name: 'Weston desktop shell',
        source: WaylandProtocolSource.WestonProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/weston-desktop-shell.json'),
    },
    {
        id: 'weston-direct-display',
        name: 'Weston direct display',
        source: WaylandProtocolSource.WestonProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/weston-direct-display.json'),
    },
    {
        id: 'weston-output-capture',
        name: 'Weston output capture',
        source: WaylandProtocolSource.WestonProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/weston-output-capture.json'),
    },
    {
        id: 'weston-screenshooter',
        name: 'Weston screenshooter',
        source: WaylandProtocolSource.WestonProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/weston-screenshooter.json'),
    },
    {
        id: 'weston-test',
        name: 'Weston test',
        source: WaylandProtocolSource.WestonProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/weston-test.json'),
    },
    {
        id: 'weston-touch-calibration',
        name: 'Weston touch calibration',
        source: WaylandProtocolSource.WestonProtocols,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/weston-touch-calibration.json'),
    },
    {
        id: 'wayland-drm',
        name: 'Mesa Wayland DRM',
        source: WaylandProtocolSource.External,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/wayland-drm.json'),
        externalUrl:
            'https://gitlab.freedesktop.org/mesa/mesa/-/blob/main/src/egl/wayland/wayland-drm/wayland-drm.xml',
    },
    {
        id: 'aura-shell',
        name: 'Chromium aura shell',
        source: WaylandProtocolSource.External,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/aura-shell.json'),
        externalUrl:
            'https://source.chromium.org/chromium/chromium/src/+/master:components/exo/wayland/protocol/aura-shell.xml',
    },
    {
        id: 'virtual-keyboard-unstable-v1',
        name: 'Virtual keyboard',
        source: WaylandProtocolSource.External,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/virtual-keyboard-unstable-v1.json'),
        externalUrl:
            'https://lists.freedesktop.org/archives/wayland-devel/2019-September/040882.html',
    },
    {
        id: 'tizen-extension',
        name: 'Tizen extension',
        source: WaylandProtocolSource.External,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/tizen-extension.json'),
        externalUrl:
            'https://review.tizen.org/git/?p=platform/core/uifw/wayland-extension.git;a=blob;f=protocol/tizen-extension.xml;h=7bacfa6dbf1f54a74f83fe3a27bca38419397dde;hb=refs/heads/accepted/tizen_common',
    },
    {
        id: 'nvidia-eglstream',
        name: 'NVIDIA EGLStream',
        source: WaylandProtocolSource.External,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/nvidia-eglstream.json'),
        externalUrl:
            'https://github.com/NVIDIA/egl-wayland/blob/master/wayland-eglstream/wayland-eglstream.xml',
    },
    {
        id: 'nvidia-eglstream-controller',
        name: 'NVIDIA EGLStream controller',
        source: WaylandProtocolSource.External,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/nvidia-eglstream-controller.json'),
        externalUrl:
            'https://github.com/NVIDIA/egl-wayland/blob/master/wayland-eglstream/wayland-eglstream-controller.xml',
    },
    {
        id: 'gtk-shell',
        name: 'GTK Shell',
        source: WaylandProtocolSource.External,
        stability: WaylandProtocolStability.Unstable,
        protocol: require('./protocols/gtk-shell.json'),
        externalUrl:
            'https://gitlab.gnome.org/GNOME/gtk/-/blob/main/gdk/wayland/protocol/gtk-shell.xml',
    },
]

class WaylandProtocolRegistry {
    protocols = protocols

    getProtocolWithMetadata(
        protocolId: string
    ): { protocol: WaylandProtocol; metadata: WaylandProtocolMetadata } | null {
        const registryItem = this.protocols.find(
            (protocol) => protocol.id === protocolId
        )
        if (!registryItem) return null

        const { protocol, ...metadata } = registryItem

        return { protocol, metadata }
    }
}

export const waylandProtocolRegistry = new WaylandProtocolRegistry()
