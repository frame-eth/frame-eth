import { copyToClipboard } from '@/utils/copy'
import { getBlockExplorerAddressLink, getTargetNetwork } from '@/utils/network'
import {
  ArrowLeftOnRectangleIcon,
  ArrowTopRightOnSquareIcon,
  ArrowsRightLeftIcon,
  CheckCircleIcon,
  DocumentDuplicateIcon,
  QrCodeIcon,
} from '@heroicons/react/24/outline'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import { QRCodeSVG } from 'qrcode.react'
import { useState } from 'react'
import { useDisconnect, useEnsName, useSwitchNetwork } from 'wagmi'
import { Address } from './Address'
import { Balance } from './Balance'
import { BlockieAvatar } from './BlockieAvatar'

/**
 * Custom Wagmi Connect Button (watch balance + custom design)
 */
export const CustomConnectButton = () => {
  const [address, setAddress] = useState('')
  const configuredNetwork = getTargetNetwork()
  const { disconnect } = useDisconnect()
  const { switchNetwork } = useSwitchNetwork()
  const [addressCopied, setAddressCopied] = useState(false)

  const { data: ensName } = useEnsName({
    address: address as `0x${string}`,
  })

  return (
    <ConnectButton.Custom>
      {({ account, chain, openConnectModal, mounted }) => {
        const connected = mounted && account && chain
        const blockExplorerAddressLink = account
          ? getBlockExplorerAddressLink(getTargetNetwork(), account.address)
          : undefined

        if (account && account.address) setAddress(account.address)

        return (
          <>
            {(() => {
              if (!connected) {
                return (
                  <button
                    className="btn btn-primary btn-sm normal-case h-10 w-36 text-sm"
                    onClick={openConnectModal}
                    type="button"
                  >
                    Connect Wallet
                  </button>
                )
              }

              if (chain.unsupported || chain.id !== configuredNetwork.id) {
                return (
                  <div className="dropdown dropdown-end">
                    <label
                      tabIndex={0}
                      className="btn btn-error btn-sm dropdown-toggle gap-1 h-10 w-36 "
                    >
                      <span>Wrong network</span>
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu z-[2] p-2 mt-2 shadow-center bg-base-200 gap-1 rounded-lg"
                    >
                      <li>
                        <button
                          className="btn-sm !rounded-xl flex py-3 gap-3"
                          type="button"
                          onClick={() => switchNetwork?.(configuredNetwork.id)}
                        >
                          <ArrowsRightLeftIcon className="h-6 w-4 ml-2 sm:ml-0" />
                          <span className="whitespace-nowrap">
                            Switch to <span>{configuredNetwork.name}</span>
                          </span>
                        </button>
                      </li>
                      <li>
                        <button
                          className="menu-item text-error btn-sm !rounded-xl flex gap-3 py-3"
                          type="button"
                          onClick={() => disconnect()}
                        >
                          <ArrowLeftOnRectangleIcon className="h-6 w-4 ml-2 sm:ml-0" />
                          <span>Disconnect</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                )
              }

              return (
                <div className="flex justify-end items-center">
                  <div className="flex flex-col items-center mr-1">
                    <Balance
                      address={account.address}
                      className="min-h-0 h-auto"
                    />
                    <span className="text-xs">{chain.name}</span>
                  </div>
                  <div className="dropdown dropdown-end leading-3">
                    <label
                      tabIndex={0}
                      className="btn btn-primary btn-sm dropdown-toggle gap-2 h-10 w-36"
                    >
                      <BlockieAvatar
                        address={account.address}
                        size={20}
                        ensImage={account.ensAvatar}
                      />
                      <span className="text-xs normal-case">
                        {ensName ? ensName : account.displayName}
                      </span>
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu z-[2] p-2 mt-2 shadow-center bg-base-200 gap-1 rounded-lg"
                    >
                      <li>
                        {addressCopied ? (
                          <div className="btn-sm !rounded-xl flex gap-3 py-3">
                            <CheckCircleIcon
                              className="text-xl font-normal h-6 w-4 cursor-pointer ml-2 sm:ml-0"
                              aria-hidden="true"
                            />
                            <span className=" whitespace-nowrap text-">
                              Copy address
                            </span>
                          </div>
                        ) : (
                          <div
                            className="btn-sm flex gap-3 py-3"
                            onClick={() => {
                              copyToClipboard(account.address)
                              setAddressCopied(true)
                              setTimeout(() => {
                                setAddressCopied(false)
                              }, 800)
                            }}
                          >
                            <DocumentDuplicateIcon
                              className="text-xl font-normal h-6 w-4 cursor-pointer ml-2 sm:ml-0"
                              aria-hidden="true"
                            />
                            <span className="whitespace-nowrap">
                              Copy address
                            </span>
                          </div>
                        )}
                      </li>
                      <li>
                        <label
                          htmlFor="qrcode-modal"
                          className="btn-sm flex gap-3 py-3"
                        >
                          <QrCodeIcon className="h-6 w-4 ml-2 sm:ml-0" />
                          <span className="whitespace-nowrap">
                            View QR Code
                          </span>
                        </label>
                      </li>
                      <li>
                        <button
                          className="menu-item btn-sm flex gap-3 py-3"
                          type="button"
                        >
                          <ArrowTopRightOnSquareIcon className="h-6 w-4 ml-2 sm:ml-0" />
                          <a
                            target="_blank"
                            href={blockExplorerAddressLink}
                            rel="noopener noreferrer"
                            className="whitespace-nowrap"
                          >
                            View on Block Explorer
                          </a>
                        </button>
                      </li>
                      <li>
                        <button
                          className="menu-item text-error btn-sm flex gap-3 py-3"
                          type="button"
                          onClick={() => disconnect()}
                        >
                          <ArrowLeftOnRectangleIcon className="h-6 w-4 ml-2 sm:ml-0" />{' '}
                          <span>Disconnect</span>
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <input
                      type="checkbox"
                      id="qrcode-modal"
                      className="modal-toggle"
                    />
                    <label
                      htmlFor="qrcode-modal"
                      className="modal cursor-pointer"
                    >
                      <label className="modal-box relative">
                        {/* dummy input to capture event onclick on modal box */}
                        <input className="h-0 w-0 absolute top-0 left-0" />
                        <label
                          htmlFor="qrcode-modal"
                          className="btn btn-ghost btn-sm btn-circle absolute right-3 top-3"
                        >
                          ✕
                        </label>
                        <div className="space-y-3 py-6">
                          <div className="flex space-x-4 flex-col items-center gap-6">
                            <QRCodeSVG value={account.address} size={256} />
                            <Address
                              address={account.address as `0x${string}`}
                              format="long"
                              disableAddressLink
                            />
                          </div>
                        </div>
                      </label>
                    </label>
                  </div>
                </div>
              )
            })()}
          </>
        )
      }}
    </ConnectButton.Custom>
  )
}
